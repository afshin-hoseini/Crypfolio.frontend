import React, { useMemo, FC } from 'react';

type SymbolCellProps = {
    symbol: string;
}

export const SymbolCell : FC<SymbolCellProps> = ({symbol})=>{

    const symbolIconAddress = useMemo(()=>{
        
        try{
            return require(`cryptocurrency-icons/svg/color/${symbol.toLowerCase()}.svg`)
        }
        catch(e){}
    }, [symbol]);
    return useMemo(()=>(
            <div>
                <img src={symbolIconAddress}/>
                {symbol}
            </div>
        ), [symbol, symbolIconAddress])
}