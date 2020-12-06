import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import { Trade } from 'src/@types';
import { ApiCallStatus } from 'src/@types/enums';
import {
  TradesStore,
  ApiCallStatusWithReport,
  TradeStoreModificationStatus,
  CreateTradeActionType,
  DeleteTradeActionType,
  UpdateTradeActionType,
} from '../@types';
import { createTradeModificationKey } from '../utils';

const name = 'trades';
const tradesAdapter = createEntityAdapter<Trade>({
  selectId: (trade) => trade.id || '1',
});

const initialState: TradesStore = tradesAdapter.getInitialState({
  loadingStatus: { status: ApiCallStatus.none },
  modificationStatuses: {},
});

export const tradeSlice = createSlice({
  name,
  initialState,
  reducers: {
    /** Loads users trades, handled through saga */
    load: (state) => {
      state.loadingStatus = { status: ApiCallStatus.inProgress };
    },

    /** Fills the state with fetched trades */
    loaded: (state, action: PayloadAction<Trade[]>) => {
      tradesAdapter.addMany(state, action.payload);
      state.loadingStatus = { status: ApiCallStatus.succeeded };
    },

    /** Marks the load status as failed */
    loadError: (state, action: PayloadAction<Omit<ApiCallStatusWithReport, 'status'>>) => {
      state.loadingStatus = { ...action.payload, status: ApiCallStatus.failed };
    },

    /** Creates the given trade, this gonna be handled by Saga */
    create: (state, action: CreateTradeActionType) => {
      const modification: TradeStoreModificationStatus = {
        action: 'create',
        id: action.payload.tempId,
        status: { status: ApiCallStatus.inProgress },
        trade: action.payload.trade,
      };
      const modifKey = createTradeModificationKey(modification.action, modification.id);
      state.modificationStatuses[modifKey] = modification;
    },

    /**
     * Removes the given trade, this gonna be handled by saga.
     * @throws When the given trade has no ID.
     */
    delete: (state, action: DeleteTradeActionType) => {
      if (!action.payload.id) throw new Error("Cannot delete a trade doesn't have ID");

      const modification: TradeStoreModificationStatus = {
        action: 'delete',
        id: action.payload.id!,
        status: { status: ApiCallStatus.inProgress },
        trade: action.payload,
      };
      const modifKey = createTradeModificationKey(modification.action, modification.id);
      state.modificationStatuses[modifKey] = modification;
    },

    /**
     * Updates the given trade, this gonna be handled by saga.
     * @throws When the given trade has no ID.
     */
    update: (state, action: UpdateTradeActionType) => {
      if (!action.payload.id) throw new Error("Cannot update a trade doesn't have ID");

      const modification: TradeStoreModificationStatus = {
        action: 'update',
        id: action.payload.id!,
        status: { status: ApiCallStatus.inProgress },
        trade: action.payload,
      };
      const modifKey = createTradeModificationKey(modification.action, modification.id);
      state.modificationStatuses[modifKey] = modification;
    },

    /**
     * Updates the corresponding trade modification status. Updates the dataset with the given trade when the
     * status indicates that the operation has been finished successfully.
     */
    tradeModificationChanged: (state, action: PayloadAction<TradeStoreModificationStatus>) => {
      const actionType = action.payload.action;
      const key = createTradeModificationKey(actionType, action.payload.id);

      state.modificationStatuses = { ...state.modificationStatuses, [key]: action.payload };

      if (action.payload.status?.status === ApiCallStatus.succeeded) {
        switch (actionType) {
          case 'create':
            tradesAdapter.addOne(state, action.payload.trade);
            break;
          case 'delete':
            tradesAdapter.removeOne(state, action.payload.id);
            break;
          case 'update':
            tradesAdapter.updateOne(state, { id: action.payload.id, changes: action.payload.trade });
        }
      }
    },
  },
});
