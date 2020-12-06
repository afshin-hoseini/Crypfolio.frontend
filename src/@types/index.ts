import { TradeSide } from './enums';

export type Vault = {
  symbol?: string;
  totalBuy?: number;
  totalSell?: number;
  remainingAmount?: number;
  profitPercentage?: number;
  profitAmount?: number;
  currentPrice?: number;
  pinned?: boolean;
};

export type Trade = {
  id?: string | number;
  symbol?: string;
  base?: string;
  amount?: number;
  side?: TradeSide;
  atPrice?: number;
};

export type User = {
  id?: number;
  name?: string;
  email?: string;
};
