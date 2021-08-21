import styled from 'styled-components';

export const DashboardContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
  .nav-menu {
    margin: 30px 0;
  }
`;

export const DashboardContentWrapper = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  margin: 30px;
`;
