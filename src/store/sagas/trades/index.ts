import { takeEvery } from 'redux-saga/effects';
import { tradeSlice } from 'src/store/reducers';
import { createTradeSaga } from './create';
import { deleteTradeSaga } from './delete';
import { loadTradesSaga } from './load';
import { updateTradeSaga } from './update';

/** Handles trade async actions */
export function* tradeSagas() {
  yield takeEvery(tradeSlice.actions.load, loadTradesSaga);
  yield takeEvery(tradeSlice.actions.create, createTradeSaga);
  yield takeEvery(tradeSlice.actions.delete, deleteTradeSaga);
  yield takeEvery(tradeSlice.actions.update, updateTradeSaga);
}
