import styled from 'styled-components';
import { PrimaryContainer } from 'src/components/Containers';

export const WatchListWrapper = styled(PrimaryContainer)`
  .content-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

export const WatchListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  width: 100%;

  .amount-label {
    margin-left: 20px;
    flex: 1;
  }
`;

export const WatchListSortableWarpper = styled.ul`
  list-style-type: none;
`;

export const WatchListSortableItemWarpper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const DragHandleWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 10px 0 0;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WatchListTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
