import React, { FC, useContext, useMemo, useState } from 'react';

const DashboardPageContext = React.createContext<IDashboardPageContext>({});
export const DashboardPageConsumer = DashboardPageContext.Consumer;

export const DashboardPageProvider: FC = ({ children }) => {
  const [title, setTitle] = useState<React.ReactNode>();
  const value = useMemo<IDashboardPageContext>(() => ({ title, setTitle }), [title]);
  return <DashboardPageContext.Provider value={value}>{children}</DashboardPageContext.Provider>;
};

export const useDashboardPage = () => useContext(DashboardPageContext);
