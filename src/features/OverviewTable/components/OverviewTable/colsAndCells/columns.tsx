import { Column, CellProps } from 'react-table';
import { SymbolCellComponent } from './SymbolCell';
import React from 'react';
import { ProfitViewerCellComponent } from './ProfitViewerCell';
import { ActionsCellComponent } from './ActionsCell';

/**
 * Overview table's symbol viewer cell. Corresponding to UI definitions,
 * it is intended to show the symbol icon beside its current value.
 */
const SymbolCell = ({ row: { original } }: CellProps<Vault>) => {
  if (!original) return null;

  return <SymbolCellComponent vault={original} />;
};

/** Profit/Loss viewer cell */
const PLViewerCell = ({ row: { original } }: CellProps<Vault>) => {
  if (!original) return null;

  return <ProfitViewerCellComponent vault={original} />;
};

const RowActionsCell = ({ row: { original } }: CellProps<Vault>) => {
  return <ActionsCellComponent vault={original} />;
};

/**
 * Defines trade overview table columns.
 */
export const columns: Column<Vault>[] = [
  {
    accessor: 'symbol',
    Cell: SymbolCell,
  },
  {
    accessor: 'profitAmount',
    Cell: PLViewerCell,
  },
  {
    id: 'actions',
    accessor: 'symbol',
    Cell: RowActionsCell,
  },
];
