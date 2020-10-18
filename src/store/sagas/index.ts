import { all } from 'redux-saga/effects';
import { userSagas } from './user';
import createSagaMiddleware from 'redux-saga';
import { authenticationSagas } from './authentication';

// export const rootSaga = userSagas;
export function* rootSaga() {
  yield all([userSagas(), authenticationSagas()]);
}

export const sagaMiddleware = createSagaMiddleware();
