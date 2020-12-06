import React from 'react';
import './App.css';
import { PriceContextProvider } from './PriceContext';
import { InvestmentTable } from './InvestmentTable';
import { StyleProvider } from './Theme';
import { AppReduxProvider } from './store';

function App() {
  return (
    <PriceContextProvider>
      <StyleProvider>
        <AppReduxProvider>
          <InvestmentTable />
        </AppReduxProvider>
      </StyleProvider>
    </PriceContextProvider>
  );
}

export default App;
