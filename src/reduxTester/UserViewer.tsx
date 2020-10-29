import React, { useEffect } from 'react';
import { useSelector, DefaultRootState, useDispatch } from 'react-redux';
import { ApiCallStatus } from 'src/@types/enums';
import { userSlice } from 'src/store/reducers';

const userSelector = (state: DefaultRootState) => state.user;

export const UserDataViewer = () => {
  const userStore = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSlice.actions.getUser());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {userStore?.updatingStatus?.status === ApiCallStatus.succeeded && (
        <>
          <span>Id: {userStore?.info?.id}</span>
          <span>Name: {userStore?.info?.name}</span>
          <span>Email: {userStore?.info?.email}</span>
        </>
      )}

      {userStore?.updatingStatus?.status === ApiCallStatus.inProgress && <span>LOADING ....</span>}
    </div>
  );
};
