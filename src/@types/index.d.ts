type Vault = {
  symbol?: string;
  totalBuy?: number;
  totalSell?: number;
  remainingAmount?: number;
  profitPercentage?: number;
  profitAmount?: number;
  currentPrice?: number;
  pinned?: boolean;
};

type Trade = {
  symbol?: string;
  base?: string;
  amount?: number;
  side?: TradeSide;
  atPrice?: number;
};

type User = {
  id?: number;
  name?: string;
  email?: string;
};
