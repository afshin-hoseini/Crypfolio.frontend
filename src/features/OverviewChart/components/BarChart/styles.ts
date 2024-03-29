import styled from 'styled-components';

export const BarChartWrapper = styled.section<{ labelsSectionHight?: number }>`
  width: 100%;
  height: 100%;
  min-height: 150px;
  position: relative;

  &::after {
    --height: 1px;
    content: ' ';
    position: absolute;
    height: var(--height);
    background-color: black;
    width: 100%;
    left: 0;
    top: calc((100% - ${(p) => p.labelsSectionHight}px) / 2);
  }
`;

export const BarsScroller = styled.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  position: relative;
  overflow: auto hidden;
`;

export const BarItemWarpper = styled.div`
  display: flex;
  flex-direction: column;

  .bar-section {
    flex: 1;
    position: relative;
  }

  .bar-span {
    position: absolute;
    transition: all 0.3s ease;
    &.profit {
      background-color: ${(p) => p.theme.colors?.profit};
      bottom: 50%;
      border-radius: 20px 20px 0 0;
    }
    &.loss {
      background-color: ${(p) => p.theme.colors?.loss};
      top: 50%;
      border-radius: 0 0 20px 20px;
    }
  }

  .label-section {
    display: flex;
    align-items: flex-end;
    position: relative;
    .label {
      transform: rotate(-54deg);
      transform-origin: right center;
      position: absolute;
      right: 50%;
      top: 5px;
      font-size: 13px;
    }
  }
`;

export const BarChartTooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .symbol-title {
      margin-left: 20px;
    }
  }
`;
