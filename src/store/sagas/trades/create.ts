import { call, put } from 'redux-saga/effects';
import { Trade } from 'src/@types';
import { ApiCallStatus } from 'src/@types/enums';
import { CreateTradeActionType } from 'src/store/@types';
import { tradeSlice } from 'src/store/reducers';

const createTradeApi = (trade: Trade) => {
  return new Promise((resolve) => {
    resolve({ ...trade, id: 10 } as Trade);
  });
};

export function* createTradeSaga(action: CreateTradeActionType) {
  const { tempId, trade } = action.payload;

  try {
    const createdTrade = yield call(createTradeApi, trade);

    // Notifies that the trade has been created.
    yield put(
      tradeSlice.actions.tradeModificationChanged({
        action: 'create',
        id: tempId,
        status: { status: ApiCallStatus.succeeded },
        trade: createdTrade,
      })
    );
  } catch (e) {
    // Notifies failure
    yield put(
      tradeSlice.actions.tradeModificationChanged({
        action: 'create',
        id: tempId,
        status: { errorDescription: "Couldn't create trade", errorObject: e, status: ApiCallStatus.failed },
        trade: trade,
      })
    );
  }
}
