import { call, put } from 'redux-saga/effects';
import { Trade } from 'src/@types';
import { ApiCallStatus } from 'src/@types/enums';
import { UpdateTradeActionType } from 'src/store/@types';
import { tradeSlice } from 'src/store/reducers';

const updateTradeApi = (trade: Trade) => {
  return new Promise((resolve) => {
    resolve(true);
  });
};

export function* updateTradeSaga(action: UpdateTradeActionType) {
  const trade = action.payload;

  try {
    yield call(updateTradeApi, trade);

    // Notifies that the trade has been deleted.
    yield put(
      tradeSlice.actions.tradeModificationChanged({
        action: 'update',
        id: trade.id!,
        status: { status: ApiCallStatus.succeeded },
        trade,
      })
    );
  } catch (e) {
    // Notifies failure
    yield put(
      tradeSlice.actions.tradeModificationChanged({
        action: 'update',
        id: trade.id!,
        status: { errorDescription: "Couldn't create trade", errorObject: e, status: ApiCallStatus.failed },
        trade,
      })
    );
  }
}
