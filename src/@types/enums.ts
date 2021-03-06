export enum ApiCallStatus {
  none = 'none',
  inProgress = 'inProgress',
  succeeded = 'succeeded',
  failed = 'failed',
}

export enum ConnectionStatus {
  none = 'none',
  connecting = 'connecting',
  connected = 'connected',
  disconnected = 'disconnected',
}

export enum TradeSide {
  Buy = 1,
  Sell = -1,
}
