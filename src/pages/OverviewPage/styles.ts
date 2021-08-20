import styled from 'styled-components';

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  .overview-chart-wrapper {
    margin-bottom: 25px;
    min-height: 140px;
  }
`;

export const OverviewTablesSection = styled.section`
  display: flex;
  flex-direction: row;

  .overview-table {
    flex: 1;
  }
  .quick-look-section {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    > * {
      margin: 8px;
    }
  }
`;
