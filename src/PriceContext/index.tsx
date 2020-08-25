import React, { FC, useMemo, useContext } from 'react';
import { usePriceTicker } from './actions/usePriceTicker';

export const PriceContext = React.createContext<IPriceContext>({});

export const PriceContextProvider : FC = ({children})=>{

    const {getSymbolTicker, priceTickers} = usePriceTicker();

    const value = useMemo(()=>({
        getSymbolTicker, 
        priceTickers
    }), [getSymbolTicker, priceTickers])

    return (
        <PriceContext.Provider value={{
            getSymbolTicker, 
            priceTickers
        }}>
            {children}
        </PriceContext.Provider>
    )
}

export const usePriceContext = ()=> useContext(PriceContext);