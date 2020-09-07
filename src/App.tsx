import React from 'react';
import './App.css';
import { PriceContextProvider } from './PriceContext';
import { InvestmentTable } from './InvestmentTable';
import { StyleProvider } from './Theme';
 
 function App() {
   
    return(
      
        <PriceContextProvider>
          <StyleProvider>
            <InvestmentTable/>
          </StyleProvider>
        </PriceContextProvider>
    )
 }



export default App;
