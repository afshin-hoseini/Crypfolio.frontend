import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { columns } from './colsAndCells';
import { OverviewTable, OverviewTableWrapper } from '../styles';
import { Container } from 'src/components/Containers';
import { ContainerMode } from 'src/components/Containers/@types';
import { FilterSelect } from 'src/components/FilterSelect';
import { Button } from 'src/components/Buttons';
import { useTranslation } from 'react-i18next';
import { OverviewTableComponentProps, OverviewTableInstance, OverviewTableVaultActions } from '../../@types';
import { overviewTablefilterTypes } from './utils';

/**
 * Represents trade total profit/loss and symbol's price.
 * It also provides filtering.
 */
export const OverviewTableComponent: FC<OverviewTableComponentProps> = ({
  vaultsData = [],
  onVaultPinToggled,
  className = '',
}) => {
  const { t } = useTranslation();

  const { getTableProps, getTableBodyProps, rows, prepareRow, setGlobalFilter }: OverviewTableInstance = useTable(
    {
      columns,
      data: vaultsData,
      filterTypes: overviewTablefilterTypes,
      globalFilter: overviewTablefilterTypes.symbolsFilter,
    } as any,
    useGlobalFilter
  );

  /** Global filter options including all symbols listed in `vaultsData` */
  const filterOptions = useMemo(
    () => vaultsData.map((vault) => ({ label: vault.symbol || '', value: vault.symbol || '' })),
    [vaultsData]
  );

  /** Supported vault actions like pining a vault */
  const actions = useMemo<OverviewTableVaultActions>(
    () => ({
      onPinClicked: onVaultPinToggled,
    }),
    [onVaultPinToggled]
  );

  /** Renders table rows when needed. */
  const rowElements = useMemo(() => {
    return rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => {
            return <td {...cell.getCellProps()}>{cell.render('Cell', { ...actions })}</td>;
          })}
        </tr>
      );
    });
  }, [rows, prepareRow, actions]);

  return (
    <OverviewTableWrapper mode={ContainerMode.Level1} padding="0" className={`${className}`}>
      <div className="overview-table-actions-wrapper">
        <FilterSelect
          className="filter-select"
          options={filterOptions}
          placeholder={t('global:features.overviewTable.filterPlaceholder')}
          onChange={(selectedOptions) =>
            setGlobalFilter?.(Array.isArray(selectedOptions) ? selectedOptions.map((option) => option.value) : null)
          }
        />
        <Button className="btn-add-trade" color="primary">
          {t('global:features.overviewTable.addTrade')}
        </Button>
      </div>
      <Container mode={ContainerMode.Level2}>
        <OverviewTable {...getTableProps()} cellSpacing={0}>
          <tbody {...getTableBodyProps()}>{rowElements}</tbody>
        </OverviewTable>
      </Container>
    </OverviewTableWrapper>
  );
};
