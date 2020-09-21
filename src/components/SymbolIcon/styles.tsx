import { Size } from './@types';
import styled from 'styled-components';

const defaultSize = Size.Medium;

export const SymbolIconWrapper = styled.div<{ size?: number }>`
  width: ${(p) => p.size || defaultSize}px;
  height: ${(p) => p.size || defaultSize}px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  .unknown-symbol-icon {
    font-size: ${(p) => p.size || defaultSize}px;
  }
`;
