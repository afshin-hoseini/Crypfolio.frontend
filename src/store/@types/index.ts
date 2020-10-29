import { EntityState, PayloadAction } from '@reduxjs/toolkit';
import { ApiCallStatus, ConnectionStatus } from 'src/@types/enums';
import { Vault, User, Trade } from 'src/@types';

/** Describes action data type for trade creation action. */
export type CreateTradeActionType = PayloadAction<{ trade: Trade; tempId: string | number }>;
/** Describes action data type for trade deletion action.*/
export type DeleteTradeActionType = PayloadAction<Trade>;
/** Describes action data type for trade updating action.*/
export type UpdateTradeActionType = PayloadAction<Trade>;

export type ApiCallStatusWithReport = {
  status?: ApiCallStatus;
  errorDescription?: string;
  errorObject?: string;
};

/** Stores authentication info and keeps their state */
export type AuthenticationStore = {
  token?: string;
  /** Represents either login or signup status, according to the action user performed recently */
  authRequestStatus?: ApiCallStatusWithReport;
};

export type VaultStoreItem = {
  vault?: Vault;
  /** Reports removing status */
  removingStatus: ApiCallStatusWithReport;
  /** Reports updating status */
  updatingStatus: ApiCallStatusWithReport;
};

export type VaultsStore = {
  vaults?: VaultStoreItem[];
  loadingStatus?: ApiCallStatusWithReport;
};

export type UserStore = {
  info?: User;
  updatingStatus?: ApiCallStatusWithReport;
};

export type TradeStoreModificationStatus = {
  /** The trade instance that the corresponding action is being performed on. */
  trade: Trade;
  /** The status of action */
  status: ApiCallStatusWithReport;
  /** The action that has been dispatched on the given trade. */
  action: 'create' | 'update' | 'delete';
  /**
   * The trade id or a random temprary ID for when the trade object doesn't have ID.
   */
  id: string | number;
};

export type TradesStore = EntityState<Trade> & {
  loadingStatus: ApiCallStatusWithReport;
  modificationStatuses: { [key: string]: TradeStoreModificationStatus | undefined };
};

export type PriceTickerStore = {
  connectionStatus?: ConnectionStatus;
  tickers?: { [asset: string]: number };
};

export type ReduxStore = {
  user?: UserStore;
  authentication?: AuthenticationStore;
  vaults?: VaultsStore;
  trades?: TradesStore;
  priceTicker?: PriceTickerStore;
};
