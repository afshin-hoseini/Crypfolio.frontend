import React, { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import {
  WatchListSortableItemWarpper,
  WatchListWrapper,
  WatchListSortableWarpper,
  DragHandleWrapper,
  WatchListTitleWrapper,
} from '../styles';
import { SortableContainer, SortableElement, SortableHandle, SortEndHandler } from 'react-sortable-hoc';
import { WatchListItem } from './WatchListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faPlus } from '@fortawesome/free-solid-svg-icons';
import { moveItem } from 'src/utils';
import { useTranslation } from 'react-i18next';
import { Header1 } from 'src/components/Text';
import { Button } from 'src/components/Buttons';

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

export const WatchListComponent: FC<WatchListComponentProps> = ({
  symbols: propSymbols = [],
  onOrderChanged,
  onAddWatchBtnClicked,
}) => {
  const [symbols, setSymbols] = useState(propSymbols);
  const { t } = useTranslation();

  const onSortEnd = useCallback<SortEndHandler>(
    (sort) => {
      setSymbols((prev) => {
        const newOrder = moveItem(sort.oldIndex, sort.newIndex, prev);
        setTimeout(() => onOrderChanged?.(newOrder));
        return newOrder;
      });
    },
    [onOrderChanged]
  );

  useEffect(() => {
    setSymbols(propSymbols);
  }, [propSymbols]);

  const title = useMemo(
    () => (
      <WatchListTitleWrapper>
        <Header1>{t('global:features.priceWathList.title')}</Header1>
        <Button color="primary" onClick={onAddWatchBtnClicked}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </WatchListTitleWrapper>
    ),
    [t, onAddWatchBtnClicked]
  );

  return useMemo(
    () => (
      <WatchListWrapper title={title}>
        <SortableWatchList useDragHandle axis="y" onSortEnd={onSortEnd} lockAxis="y">
          {symbols?.map((symbol, index) => (
            <SortableWatchListItem symbol={symbol} index={index} />
          ))}
        </SortableWatchList>
      </WatchListWrapper>
    ),
    [symbols, onSortEnd, title]
  );
};
