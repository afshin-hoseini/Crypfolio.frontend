import React, { FC } from 'react';
import { SymbolIcon } from 'src/components/SymbolIcon';
import { ColorMode, Size } from 'src/components/SymbolIcon/@types';
import { Header1 } from 'src/components/Text';
import { useWatchListContext } from '../../Context';
import { WatchListItemWrapper } from '../styles';

export const WatchListItem: FC<WatchListItemComponentProps> = ({ symbol }) => {
  const { priceTickers } = useWatchListContext();
  const price = (priceTickers?.[symbol || ''] ?? 1) as number;
  return (
    <WatchListItemWrapper>
      <SymbolIcon symbol={symbol} size={Size.Medium} color={ColorMode.White} />
      <Header1 className="amount-label">{price.toFixed(5)}</Header1>
    </WatchListItemWrapper>
  );
};
