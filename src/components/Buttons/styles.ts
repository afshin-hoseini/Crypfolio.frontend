import styled, { css } from 'styled-components';

const BaseButtonWrapper = styled.button<{ background?: string; strokeColor?: string }>`
  transition: 0.3s all ease;
  padding: 12px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;

export const ContainedButtonWrapper = styled(BaseButtonWrapper)`
  background: ${(p) => p.background ?? p.theme.buttons?.contained.background};
  border: none;

  :active {
    opacity: 0.8;
  }
`;

export const OutlinedButtonWrapper = styled(BaseButtonWrapper)`
  ${(p) => {
    const color = p.strokeColor ?? p.theme.buttons?.outlined.strokeColor;
    if (color)
      return css`
        border-color: ${color} !important;
      `;
  }};
  border: 2px solid;
  background: none;

  :active {
    opacity: 0.5;
  }
`;
