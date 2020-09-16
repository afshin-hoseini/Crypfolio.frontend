import React, { FC, useEffect } from 'react';
import { Column, useTable } from 'react-table';
import { Cells } from '../cells';
import { usePriceContext } from '../PriceContext';
import { trades } from './myTrades';
import { TradeModel, TradeSide } from '../models';

const defaultValut: () => Vault = () => ({
  remainingAmount: 0,
  symbol: '',
  totalBuy: 0,
  totalSell: 0,
});

const valutsDataProvider = (trades: TradeModel[]) => {
  const vaultCollection = trades.reduce<{
    [k: string]: Vault;
  }>((collection, trade) => {
    const vault: Vault = collection[trade.symbol || ''] ?? defaultValut();

    vault.remainingAmount! += trade.side! * trade.amount!;
    vault.symbol = trade.symbol;

    if (trade.side === TradeSide.Buy) vault.totalBuy! += (trade.atPrice || 0) * (trade.amount || 0);
    else vault.totalSell! += (trade.atPrice || 0) * (trade.amount || 0);

    collection[trade.symbol || ''] = vault;
    return collection;
  }, {});

  console.log(vaultCollection);

  return Object.values(vaultCollection);
};

export const InvestmentTable: FC = () => {
  const { getSymbolTicker } = usePriceContext();

  const data = React.useMemo<Vault[]>(() => valutsDataProvider(trades), []);

  const columns = React.useMemo<Column<Vault>[]>(
    () => [
      {
        Header: 'Coin',
        Cell: Cells.symbol,
      },
      {
        Header: 'Price',
        Cell: Cells.priceTicker,
      },
      {
        Header: 'Total Buy',
        accessor: 'totalBuy',
      },
      {
        Header: 'Total Sell',
        accessor: 'totalSell',
      },
      {
        Header: 'Remaining Amount',
        accessor: 'remainingAmount',
      },
      {
        Header: 'Profitability',
        Cell: Cells.profitability,
      },
    ],
    []
  );

  useEffect(() => {
    const symbols = data?.map((item) => item.symbol ?? '');

    if (symbols?.length > 0) getSymbolTicker?.(symbols!);
  }, [data, getSymbolTicker]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
