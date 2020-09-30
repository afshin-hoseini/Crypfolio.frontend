import { FilterType } from 'react-table';

/**
 * Filters the given rows according to given vault symbols.
 * @param rows All react-table rows to be filtered.
 * @param id Illustrates the columns the filter function should filter based on them.
 * @param filterValue An array of symbols to filter rows using them.
 */
const symbolsFilterFn: FilterType<Vault> = (rows, id, filterValue: string[] = []) => {
  return rows.filter((row) => filterValue.includes(row.original.symbol ?? ''));
};
symbolsFilterFn.autoRemove = (filterValue) => !filterValue || filterValue?.length === 0;

export const overviewTablefilterTypes = Object.freeze({
  symbolsFilter: symbolsFilterFn,
});
