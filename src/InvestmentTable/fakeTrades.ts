import { ITradeModel, TradeSide } from "../models";

export const trades : ITradeModel[] = [
    {
        symbol:"BTC",
        base: "USDT",
        amount: 1,
        atPrice: 1000,
        side: TradeSide.Buy
    },
    {
        symbol:"BTC",
        base: "USDT",
        amount: 1,
        atPrice: 2000,
        side: TradeSide.Buy
    },
    {
        symbol:"BTC",
        base: "USDT",
        amount: 1,
        atPrice: 2500,
        side: TradeSide.Sell
    },
    {
        symbol:"ETH",
        base: "USDT",
        amount: 1,
        atPrice: 200,
        side: TradeSide.Buy
    },
    {
        symbol:"ETH",
        base: "USDT",
        amount: 2,
        atPrice: 200,
        side: TradeSide.Buy
    },
    {
        symbol:"ETH",
        base: "USDT",
        amount: 2,
        atPrice: 100,
        side: TradeSide.Sell
    },
    {
        symbol:"ETH",
        base: "USDT",
        amount: 1,
        atPrice: 200,
        side: TradeSide.Sell
    },
]