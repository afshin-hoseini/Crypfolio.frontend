import React from 'react';
import './App.css';
import { PriceContextProvider } from './PriceContext';
import { InvestmentTable } from './InvestmentTable';
import { StyleProvider } from './Theme';
 
 function App() {
   
    return(
      
      
        <PriceContextProvider>
          <StyleProvider>

          <span className="text-main-title">HELLO</span>
          </StyleProvider>

          <InvestmentTable/>
        </PriceContextProvider>
    )
 }



export default App;
