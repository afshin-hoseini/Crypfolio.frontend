import React, { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { WatchListSortableItemWarpper, WatchListWrapper, WatchListSortableWarpper, DragHandleWrapper } from '../styles';
import { SortableContainer, SortableElement, SortableHandle, SortEndHandler } from 'react-sortable-hoc';
import { WatchListItem } from './WatchListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { moveItem } from 'src/utils';

const DragHandle = SortableHandle(() => (
  <DragHandleWrapper>
    <FontAwesomeIcon icon={faGripLines} />
  </DragHandleWrapper>
));

const SortableWatchListItem = SortableElement((props: { symbol: string }) => (
  <WatchListSortableItemWarpper>
    <WatchListItem symbol={props.symbol} />
    <DragHandle />
  </WatchListSortableItemWarpper>
));

const SortableWatchList = SortableContainer(({ children }: { children: ReactNode }) => {
  return <WatchListSortableWarpper>{children}</WatchListSortableWarpper>;
});

export const WatchListComponent: FC<WatchListComponentProps> = ({ symbols: propSymbols = [], onOrderChanged }) => {
  const [symbols, setSymbols] = useState(propSymbols);

  const onSortEnd = useCallback<SortEndHandler>((sort) => {
    setSymbols((prev) => {
      const newOrder = moveItem(sort.oldIndex, sort.newIndex, prev);
      setTimeout(() => onOrderChanged?.(newOrder));
      return newOrder;
    });
  }, []);

  useEffect(() => {
    setSymbols(symbols);
  }, [propSymbols]);

  return useMemo(
    () => (
      <WatchListWrapper>
        <SortableWatchList useDragHandle axis="y" onSortEnd={onSortEnd}>
          {symbols?.map((symbol, index) => (
            <SortableWatchListItem symbol={symbol} index={index} />
          ))}
        </SortableWatchList>
      </WatchListWrapper>
    ),
    [symbols]
  );
};
