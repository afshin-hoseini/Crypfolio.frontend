import React, { FC, useMemo } from 'react';
import { Vault } from 'src/@types';
import { usePriceContext } from '../../PriceContext';

type Props = {
  vault: Vault;
};

export const Profitability: FC<Props> = ({ vault }) => {
  const { priceTickers } = usePriceContext();
  const currentPrice = priceTickers?.[vault?.symbol?.toLowerCase() || ''];

  const tradedProfit = (vault.totalSell ?? 0) - (vault.totalBuy ?? 0);
  const remainingAssetValue = (vault.remainingAmount ?? 0) * (currentPrice ?? 0);
  const totalSell = (vault.totalSell ?? 0) + remainingAssetValue;

  const percentage = (totalSell - (vault.totalBuy ?? 0)) / (vault.totalBuy ?? 0);

  return useMemo(
    () => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span>{((percentage ?? 0) * 100).toFixed(2)} %</span>
        <span>{(percentage * (vault.totalBuy ?? 0)).toFixed(2)}</span>
      </div>
    ),
    [percentage, vault.totalBuy]
  );
};
