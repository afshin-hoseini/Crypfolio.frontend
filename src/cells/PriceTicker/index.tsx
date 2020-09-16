import React, { FC, useMemo } from 'react';
import { usePriceContext } from '../../PriceContext';

type Props = {
  symbol: string;
};

export const PriceTicker: FC<Props> = ({ symbol }) => {
  const { priceTickers } = usePriceContext();
  const price = priceTickers?.[symbol?.toLowerCase()];

  return useMemo(() => <span>{price}</span>, [price]);
};
