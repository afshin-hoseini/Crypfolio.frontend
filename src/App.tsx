import React from 'react';
import './App.css';
import { PriceContextProvider } from './PriceContext';
import { InvestmentTable } from './InvestmentTable';
 
 function App() {
   
    return(
      <PriceContextProvider>
        <InvestmentTable/>
      </PriceContextProvider>
    )
 }



export default App;
