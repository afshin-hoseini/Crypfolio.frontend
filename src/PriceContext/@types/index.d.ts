type IPriceContext = {
    /**
     * Represents current prices for each requested symbol.
     */
    priceTickers?: {[k : string] : number | null | undefined}
    getSymbolTicker?: (symbols: string[], base?: string)=>void
}

type PriceTickerSymbols = {
    symbols? : string[];
    baseSymbol?: string;
}