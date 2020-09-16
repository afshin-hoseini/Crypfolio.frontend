import styled from 'styled-components';

export const LimberTabControlItemsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TabItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  align-self: stretch;
  z-index: 1;
  padding-left: 20px;
  cursor: pointer;
  opacity: 0.5;
  color: ${(p) => p.theme.colors?.primary};
  transition: all 0.3s ease;

  &.selected {
    opacity: 1;
  }

  :hover {
    opacity: 0.8;
  }
`;
