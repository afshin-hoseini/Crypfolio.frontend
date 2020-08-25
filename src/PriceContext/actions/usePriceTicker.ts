import { useState, useEffect, useRef, useCallback } from 'react';
import Beautifier from '../../beautifier';

export const usePriceTicker = ()=> {

    const [symbols, setSymbols] = useState<PriceTickerSymbols>();
    const [priceTickers, setPriceTickers] = useState<{[k:string]:number|null|undefined}>();

    const socket = useRef<WebSocket>();
    const getSymbolTicker = useCallback((symbols: string[], baseSymbol?: string)=>{
      const symbolSet = new Set(symbols);
      setSymbols({symbols: Array.from(symbolSet), baseSymbol})
    }, []);

  useEffect(()=>{

    const baseSymbol = symbols?.baseSymbol?.toLocaleLowerCase() || "usdt";

    const tickerSymbols = symbols?.symbols?.
    map(symbol => `${symbol?.toLowerCase?.()}${baseSymbol}@ticker`)
    .join("/");

    if(!tickerSymbols) return;

    const beautifier = new Beautifier();
    const path = `wss://stream.binance.com:9443/stream?streams=${tickerSymbols}`;
    socket.current = new WebSocket(path);
    const ws = socket.current;

    ws.addEventListener("open", (event)=> console.log("OPEN ===> ", event));
    ws.addEventListener("message", (event)=> {

      let {data, stream} = JSON.parse(event.data);
      data = beautifier.beautify(data, data.e+"Event");
      
      setPriceTickers(prev => ({
        ...prev,
        [data.symbol?.toLowerCase().replace(baseSymbol, "")]: parseFloat(data.currentClose || "0")
      }));

    });
    ws.addEventListener("error", (event)=> console.log("\n\nERR ==>", event, "\n\n"));
    ws.addEventListener("close", (event)=> console.log("\n\nCLOSED XXX"));

    return ()=>socket.current?.close();

  }, [symbols]);

  return {getSymbolTicker, priceTickers}
}