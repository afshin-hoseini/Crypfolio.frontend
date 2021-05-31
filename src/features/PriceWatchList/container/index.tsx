import React, { FC, useEffect, useRef } from 'react';
import { WatchListComponent } from '../components/WatchList';
import { useWatchListContext, WatchListProvider } from '../Context';

const MockWatchList = ['BTC', 'XTZ', 'XRP'];

export const PriceWatchList = () => {
  return (
    <WatchListProvider>
      <WatchListComponent symbols={MockWatchList} />

      {/* This is only for generating fake price tickers */}
      <FakePriceTickerProvider />
    </WatchListProvider>
  );
};

/**
 * Generates fake price tickers every second.
 */
const FakePriceTickerProvider: FC = () => {
  const { setPriceTickers } = useWatchListContext();
  const timerHandler = useRef<number>();

  useEffect(() => {
    timerHandler.current = setInterval(
      () =>
        setPriceTickers?.({
          BTC: Math.random() * 10000,
          XTZ: Math.random() * 10,
          XRP: Math.random(),
        }),
      1000
    );
    return () => {
      clearTimeout(timerHandler.current);
      timerHandler.current = undefined;
    };
  }, [setPriceTickers]);

  return null;
};
