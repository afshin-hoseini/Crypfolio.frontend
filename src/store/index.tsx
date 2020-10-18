import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppReduxProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
