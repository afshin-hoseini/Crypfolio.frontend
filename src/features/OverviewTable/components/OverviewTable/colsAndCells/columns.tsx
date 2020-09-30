import { Column, UseFiltersColumnOptions, UseGlobalFiltersColumnOptions } from 'react-table';
import { SymbolCellComponent } from './SymbolCell';
import React from 'react';
import { ProfitViewerCellComponent } from './ProfitViewerCell';
import { ActionsCellComponent } from './ActionsCell';
import { OverviewTableCellProps } from 'src/features/OverviewTable/@types';

/**
 * Overview table's symbol viewer cell. Corresponding to UI definitions,
 * it is intended to show the symbol icon beside its current value.
 */
const SymbolCell = ({ row: { original } }: OverviewTableCellProps) => {
  if (!original) return null;

  return <SymbolCellComponent vault={original} />;
};

/** Profit/Loss viewer cell */
const PLViewerCell = ({ row: { original } }: OverviewTableCellProps) => {
  if (!original) return null;

  return <ProfitViewerCellComponent vault={original} />;
};

const RowActionsCell = ({ row: { original }, onPinClicked }: OverviewTableCellProps) => {
  return <ActionsCellComponent vault={original} onPinClicked={onPinClicked} />;
};

/**
 * Defines trade overview table columns.
 */
export const columns: (Column<Vault> &
  Partial<UseFiltersColumnOptions<Vault>> &
  Partial<UseGlobalFiltersColumnOptions<Vault>>)[] = [
  {
    accessor: 'symbol',
    Cell: SymbolCell,
  },
  {
    accessor: 'profitAmount',
    Cell: PLViewerCell,
    disableGlobalFilter: true,
  },
  {
    id: 'actions',
    accessor: 'symbol',
    Cell: RowActionsCell,
    disableGlobalFilter: true,
  },
];
