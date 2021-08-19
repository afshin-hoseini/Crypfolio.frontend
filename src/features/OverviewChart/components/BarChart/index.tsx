import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { BarItem } from './BarItem';
import { data as mockData } from './mockData';
import { BarChartWrapper, BarsScroller } from './styles';
import { BarChartTooltip } from './BarChartTooltip';

const defaultLabelsSectionHeight = 55;
const defaultBarWidth = 10;
const defaultBarPadding = 15;
const defaultMinBarPadding = 8;

export const BarChart: FC<BarChartProps> = ({
  data = mockData,
  className = '',
  barWidth = defaultBarWidth,
  barPadding: propsBarPadding = defaultBarPadding,
  minBarPadding = defaultMinBarPadding,
}) => {
  const tooltipId = useRef(`barchart_tip_${Date.now()}`);
  const labelsSectionHeight = defaultLabelsSectionHeight;
  const [wrapperRect, setWrapperRect] = useState<DOMRectReadOnly>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const wrapperWidth = wrapperRect?.width;
  const barPadding = useMemo(() => {
    if (!wrapperWidth || !data?.length) {
      return propsBarPadding;
    }

    let padding = propsBarPadding;
    const barWidthWithPaddings = barWidth + padding * 2;
    const totalWidthNeeded = barWidthWithPaddings * data.length;

    if (totalWidthNeeded > wrapperWidth) {
      padding = Math.max((wrapperWidth / data.length - barWidth) / 2, minBarPadding);
    }

    return padding;
  }, [wrapperWidth, data, barWidth, propsBarPadding, minBarPadding]);

  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') return;
    if (!wrapperRef.current) return;

    const observer = new ResizeObserver((entries) => {
      setWrapperRect(entries[0].contentRect);
    });
    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  /**
   * Finds the max profit and max loss percentages to scale the bars
   */
  const { maxLoss, maxProfit } = useMemo(
    () =>
      data?.reduce(
        (prev, item) => {
          const value = item.profitPercentage ?? 0;
          if (value > prev.maxProfit) prev.maxProfit = value;
          if (value < prev.maxLoss) prev.maxLoss = value;
          return prev;
        },
        { maxProfit: 0, maxLoss: 0 }
      ),
    [data]
  );

  const chartScale = Math.max(maxProfit, Math.abs(maxLoss));
  const barElements = useMemo(() => {
    return data?.map((item, index) => {
      const profitPercentage = item.profitPercentage ?? 0;
      const height = (Math.abs(profitPercentage) * 50) / chartScale;

      return (
        <BarItem
          tooltipId={tooltipId.current}
          key={item.symbol}
          index={index}
          data={item}
          labelSectionHeight={labelsSectionHeight}
          space={barPadding}
          heightPercentage={height}
          barWidth={defaultBarWidth}
        />
      );
    });
  }, [data, labelsSectionHeight, barPadding, chartScale]);

  return (
    <BarChartWrapper className={className} ref={wrapperRef} labelsSectionHight={labelsSectionHeight}>
      <BarsScroller>{barElements}</BarsScroller>
      <BarChartTooltip data={data} tooltipId={tooltipId.current} />
    </BarChartWrapper>
  );
};
