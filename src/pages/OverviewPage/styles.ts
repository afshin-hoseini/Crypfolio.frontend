import styled from 'styled-components';

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

export const OverviewTablesSection = styled.section`
  display: flex;
  flex-direction: row;

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
