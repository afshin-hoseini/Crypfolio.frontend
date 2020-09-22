import styled from 'styled-components';
import { AccentContainer } from 'src/components/Containers';

export const PolViewerContainer = styled(AccentContainer)`
  .content-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

export const PolItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 14px 20px 0px 30px;

  .pol-item-amount {
    padding-left: 16px;
  }

  .pol-item-icon {
    font-size: 28px;
    min-width: 25px;
  }
`;
