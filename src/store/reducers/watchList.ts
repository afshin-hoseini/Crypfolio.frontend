import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { ApiCallStatus } from 'src/@types/enums';
import { ApiCallStatusWithReport, WatchListStore, WatchListStoreModificationStatus } from '../@types';
import { createModificationKey } from '../utils';

const adapter = createEntityAdapter<string>({ selectId: (symbol) => symbol });
const name = 'watchlist';
const initialState: WatchListStore = adapter.getInitialState({
  loadingStatus: { status: ApiCallStatus.none },
  modificationStatuses: {},
});

export const watchlistSlide = createSlice({
  name,
  initialState,
  reducers: {
    /** The load action would be handled async via saga */
    load: (state) => {
      state.loadingStatus = { status: ApiCallStatus.inProgress };
    },

    /** Will be invoked when the symbol list has been loaded successfully.  */
    loaded: (state, action: PayloadAction<string[]>) => {
      state.loadingStatus = { status: ApiCallStatus.succeeded };
      adapter.addMany(state, action.payload);
    },

    /** When couldn't load the watch list symbols */
    loadError: (state, action: PayloadAction<Omit<ApiCallStatusWithReport, 'status'>>) => {
      state.loadingStatus = { ...action.payload, status: ApiCallStatus.failed };
    },

    /**
     * Because updating the watchlist is all about replacing symbols around the list,
     * it uses the loadingStatus to indicate the situation of updating
     */
    update: (state, action: PayloadAction<string[]>) => {
      state.loadingStatus = { status: ApiCallStatus.inProgress };
    },
    delete: (state, action: PayloadAction<string>) => {
      const modification: WatchListStoreModificationStatus = {
        action: 'delete',
        status: { status: ApiCallStatus.inProgress },
        symbol: action.payload,
      };
      const modificationId = createModificationKey(modification.action, modification.symbol);
      state.modificationStatuses[modificationId] = modification;
    },
    create: (state, action: PayloadAction<string>) => { },
  },
});
