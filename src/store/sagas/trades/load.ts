import { call, put } from 'redux-saga/effects';
import { Trade } from 'src/@types';
import { tradeSlice } from 'src/store/reducers';

const loadTradesApi = () => {
  return new Promise((resolve) => {
    const trades = require('./fakeTrades').trades;
    resolve(trades as Trade[]);
  });
};

export function* loadTradesSaga() {
  try {
    const trades = yield call(loadTradesApi);

    // Notifies that trades has been loades.
    yield put(tradeSlice.actions.loaded(trades));
  } catch (e) {
    // Notifies load failure
    yield put(tradeSlice.actions.loadError({ errorDescription: "Couldn't create trade", errorObject: e }));
  }
}
