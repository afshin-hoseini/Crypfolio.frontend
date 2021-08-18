import React from 'react';
import './App.css';
import { PriceContextProvider } from './PriceContext';
import { StyleProvider } from './Theme';
import { AppReduxProvider } from './store';
import { Router } from './router';

function App() {
  return (
    <PriceContextProvider>
      <StyleProvider>
        <AppReduxProvider>
          <div className="app-root">
            <Router />
          </div>
        </AppReduxProvider>
      </StyleProvider>
    </PriceContextProvider>
  );
}

export default App;
