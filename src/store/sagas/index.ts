import { all } from 'redux-saga/effects';
import { userSagas } from './user';
import createSagaMiddleware from 'redux-saga';
import { authenticationSagas } from './authentication';
import { tradeSagas } from './trades';

// export const rootSaga = userSagas;
export function* rootSaga() {
  yield all([userSagas(), authenticationSagas(), tradeSagas()]);
}

export const sagaMiddleware = createSagaMiddleware();
