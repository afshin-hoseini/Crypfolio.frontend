import { SymbolCell } from './Symbol';
import { PriceTicker } from './PriceTicker';
import React from 'react';
import { Profitability } from './Profitability';

export const Cells = {
  symbol: ({
    row: {
      original: { symbol },
    },
  }: any) => <SymbolCell symbol={symbol} />,
  priceTicker: ({
    row: {
      original: { symbol },
    },
  }: any) => <PriceTicker symbol={symbol} />,
  profitability: ({ row: { original: vault } }: any) => <Profitability vault={vault} />,
};
