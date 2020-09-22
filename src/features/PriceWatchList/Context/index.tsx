import React, { FC, useContext, useMemo, useState } from 'react';

export const WatchListContext = React.createContext<WatchListContext>({});

export const WatchListProvider: FC = ({ children }) => {
  const [priceTickers, setPriceTickers] = useState<PriceTickers>();

  const value = useMemo<WatchListContext>(
    () => ({
      priceTickers,
      setPriceTickers,
    }),
    [priceTickers]
  );

  return <WatchListContext.Provider value={value}>{children}</WatchListContext.Provider>;
};

export const useWatchListContext = () => useContext(WatchListContext);
