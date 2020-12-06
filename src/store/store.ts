import { configureStore } from '@reduxjs/toolkit';
import { authenticationSlice, userSlice } from './reducers';
import { sagaMiddleware, rootSaga } from './sagas';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
