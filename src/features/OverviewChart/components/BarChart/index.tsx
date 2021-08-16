import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { BarItem } from './BarItem';
import { data as mockData } from './mockData';
import { BarChartWrapper, BarsScroller } from './styles';

const defaultLabelsSectionHeight = 55;
const defaultBarWidth = 10;
const defaultBarPadding = 15;
const defaultMinBarPadding = 8;

export const OverviewBarChart: FC<OverviewChartProps> = ({
  data = mockData,
  className = '',
  barWidth = defaultBarWidth,
  barPadding: propsBarPadding = defaultBarPadding,
  minBarPadding = defaultMinBarPadding,
}) => {
  const labelsSectionHeight = defaultLabelsSectionHeight;
  const [wrapperRect, setWrapperRect] = useState<DOMRectReadOnly>();
  const [resizeObserverError, setResizeIbserverError] = useState<string>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const barsSectionHeight = useMemo(() => {
    if (!wrapperRect) return 0;
    return wrapperRect.height - labelsSectionHeight;
  }, [labelsSectionHeight, wrapperRect]);

  const wrapperWidth = wrapperRect?.width;
  const barPadding = useMemo(() => {
    if (!wrapperWidth || !data?.length) {
      console.log('Padding => ', 'FAILED XXXX');
      return propsBarPadding;
    }

    let padding = propsBarPadding;
    const barWidthWithPaddings = barWidth + padding * 2;
    const totalWidthNeeded = barWidthWithPaddings * data.length;

    console.log('Padding => ', 'SIZE ===> ', totalWidthNeeded, wrapperWidth);
    if (totalWidthNeeded > wrapperWidth) {
      padding = Math.max((wrapperWidth / data.length - barWidth) / 2, minBarPadding);
    }

    return padding;
  }, [wrapperWidth, data, barWidth, propsBarPadding, minBarPadding]);

  console.log('Padding => ', barPadding);

  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      setResizeIbserverError('Not supported');
      return;
    }
    if (!wrapperRef.current) {
      setResizeIbserverError('Error occured');
      return;
    }

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
    return data?.map((item) => {
      const profitPercentage = item.profitPercentage ?? 0;
      const height = (Math.abs(profitPercentage) * 50) / chartScale;

      return (
        <BarItem
          key={item.symbol}
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
    </BarChartWrapper>
  );
};
