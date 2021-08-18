import { all, call, put, takeLeading } from 'redux-saga/effects';
import { User } from 'src/@types';
import { ApiCallStatus } from 'src/@types/enums';
import { userSlice } from 'src/store/reducers';

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 123,
        name: 'Peter',
        email: 'peter@meter.com',
      });
    }, 2000);
  });
};

function* getUserHandler() {
  try {
    const user: User = yield call(fetchUser);

    yield all([
      put(userSlice.actions.setUser(user)),
      put(
        userSlice.actions.setUpdatingStatus({
          status: ApiCallStatus.succeeded,
        })
      ),
    ]);
  } catch (e) {
    yield put(
      userSlice.actions.setUpdatingStatus({
        status: ApiCallStatus.failed,
        errorDescription: "Couldn't get user info",
        errorObject: e,
      })
    );
  }
}

export function* userSagas() {
  yield takeLeading(userSlice.actions.getUser.toString(), getUserHandler);
}
