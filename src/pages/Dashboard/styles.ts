import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
  .nav-menu {
    margin: 30px 0;
  }
`;

export const DashboardContent = styled.main`
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  margin: 30px;
`;
