import { Container } from 'src/components/Containers';
import styled from 'styled-components';

export const OverviewTableWrapper = styled(Container)`
  .overview-table-actions-wrapper {
    display: flex;
    align-items: center;
    padding: 20px 28px;

    .filter-select {
      width: 100%;
      margin-right: 12px;

      .react-select__control {
        min-height: 50px;
      }
    }

    .btn-add-trade {
      white-space: nowrap;
      padding: 0 24px;
    }
  }
`;

export const OverviewTable = styled.table`
  width: 100%;
  tr:nth-child(even) {
    background-color: ${(p) => p.theme.colors?.mainBkg || 'white'};
    td {
      :not(:first-child):not(:last-child) {
        border-top: 1px solid #eeeef6;
        border-bottom: 1px solid #eeeef6;
      }

      :first-child {
        border-radius: 30px 0 0 30px;
        border-top: 1px solid #eeeef6;
        border-bottom: 1px solid #eeeef6;
        border-left: 1px solid #eeeef6;
      }

      :last-child {
        border-radius: 0px 30px 30px 0px;
        border-top: 1px solid #eeeef6;
        border-bottom: 1px solid #eeeef6;
        border-right: 1px solid #eeeef6;
      }
    }
  }
  td {
    padding: 12px 20px;
  }
`;

export const SymbolCellWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .current-price-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }

  .price-label {
    .fiat-sign {
      margin-right: 8px;
    }
  }
`;

export const ProfitViewerCellWrapper = styled.div`
  .pol-item {
    display: flex;
    align-items: center;
    .pol-item-amount {
      padding-left: 8px;
    }
    .pol-item-icon {
      width: 1.4em;
      height: 1.4em;
    }
  }
`;

/**
 * Action button used in action cell.
 * TODO: This haptikfeedback should be trasfered into button component.
 */
export const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  transition: 0.3s all ease;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  & > * {
    z-index: 1;
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0001;
    z-index: 0;
    opacity: 0;
    transition: 0.8s all;
  }
  :active:after {
    opacity: 1;
    transition: 0.2s;
  }
`;
