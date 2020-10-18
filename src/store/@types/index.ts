import { ApiCallStatus, ConnectionStatus } from 'src/@types/enums';

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

export type TradeStoreItem = {
  trade: Trade;
  updatingStatus: ApiCallStatusWithReport;
  removingStatus: ApiCallStatusWithReport;
};

export type TradesStore = {
  info: TradeStoreItem[];
  loadingStatus: ApiCallStatusWithReport[];
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
