import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';
import { ApiCallStatus } from 'src/@types/enums';
import { authenticationSlice } from '../reducers';

const loginApiCall = (payload: { username: string; password: string }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 123,
          name: 'Peter',
          email: 'peter@meter.com',
        },
        token: '1234567',
      });
    }, 2000);
  });
};

/**
 * TODO: store user token in storage
 */
function* handleLogin(action: ReturnType<typeof authenticationSlice.actions.login>) {
  try {
    const authResponse = yield call(loginApiCall, action.payload);
    yield put(authenticationSlice.actions.loggedinSuccessfully(authResponse));
  } catch (e) {
    yield put(
      authenticationSlice.actions.setAuthRequestStatus({
        errorObject: e,
        errorDescription: "Couldn't login",
        status: ApiCallStatus.failed,
      })
    );
  }
}

/**
 * Removes presistence data related to user
 * TODO: Implement the code.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
function* handleLogout() {}

export function* authenticationSagas() {
  yield takeLeading(authenticationSlice.actions.login, handleLogin);
  yield takeEvery(authenticationSlice.actions.loggedOut, handleLogout);
}
