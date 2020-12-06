import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, DefaultRootState, useDispatch } from 'react-redux';
import { User } from 'src/@types';
import { ApiCallStatus } from 'src/@types/enums';
import { userSlice } from 'src/store/reducers';

const userSelector = (state: DefaultRootState) => state.user;

export const UserEditor = () => {
  const userStore = useSelector(userSelector);
  const [editedUser, setEditedUser] = useState<User>({});
  const dispatch = useDispatch();

  const onFieldChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  useEffect(() => {
    if (userStore?.info) setEditedUser(userStore!.info!);
  }, [userStore?.info]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 20, padding: 25, border: '1px blue solid' }}>
      {userStore?.updatingStatus?.status === ApiCallStatus.succeeded && (
        <>
          <input name="id" value={editedUser.id} onChange={onFieldChanged} type="number" />
          <input name="name" value={editedUser.name} onChange={onFieldChanged} />
          <input name="email" value={editedUser.email} onChange={onFieldChanged} />

          <button onClick={() => dispatch(userSlice.actions.setUser(editedUser))}>Save</button>
        </>
      )}

      {userStore?.updatingStatus?.status === ApiCallStatus.inProgress && <span>LOADING ....</span>}
    </div>
  );
};
