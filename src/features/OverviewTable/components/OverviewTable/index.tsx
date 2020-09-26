import React, { FC, useMemo } from 'react';
import { useTable } from 'react-table';
import { columns } from './colsAndCells';
import { OverviewTable } from '../styles';
import { Container } from 'src/components/Containers';
import { ContainerMode } from 'src/components/Containers/@types';

/**
 * Represents trade total profit/loss and symbol's price.
 * It also provides filtering.
 */
export const OverviewTableComponent: FC<OverviewTableComponentProps> = ({ vaultsData }) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable<Vault>({
    columns,
    data: vaultsData,
  });

  /** Renders table rows when needed. */
  const rowElements = useMemo(() => {
    return rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => {
            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
          })}
        </tr>
      );
    });
  }, [rows, prepareRow]);

  return (
    <Container mode={ContainerMode.Level1} padding="0">
      <input type="text" />
      <Container mode={ContainerMode.Level2}>
        <OverviewTable {...getTableProps()} cellSpacing={0}>
          <tbody {...getTableBodyProps()}>{rowElements}</tbody>
        </OverviewTable>
      </Container>
    </Container>
  );
};
