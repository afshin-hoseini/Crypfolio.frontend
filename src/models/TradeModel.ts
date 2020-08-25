
export enum TradeSide {
    Buy = 1, Sell = -1
}

export interface ITradeModel {
    symbol?:string;
    base?: string;
    amount?: number;
    side?: TradeSide;
    atPrice? : number;
}