import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { BarItem } from './BarItem';
import { data as mockData } from './mockData';
import { BarChartWrapper } from './styles';

const defaultLabelsSectionHeight = 50;
const defaultBarWidth = 10;
const defaultBarPadding = 15;

export const OverviewBarChart: FC<{ data?: Vault[]; className?: string }> = ({ data = mockData, className = '' }) => {
  const labelsSectionHeight = defaultLabelsSectionHeight;
  const [wrapperRect, setWrapperRect] = useState<DOMRectReadOnly>();
  const [resizeObserverError, setResizeIbserverError] = useState<string>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const barsSectionHeight = useMemo(() => {
    if (!wrapperRect) return 0;
    return wrapperRect.height - labelsSectionHeight;
  }, [labelsSectionHeight, wrapperRect]);

  const wrapperWidth = wrapperRect?.width;
  const barPadding = defaultBarPadding;

  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      setResizeIbserverError('Not supported');
      return;
    }
    if (!wrapperRef.current) {
      setResizeIbserverError('Error occured');
      return;
    }

    const observer = new ResizeObserver((entries) => setWrapperRect(entries[0].contentRect));
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
      const isProfitable = profitPercentage >= 0;
      const height = (Math.abs(profitPercentage) * 50) / chartScale; //(isProfitable ? maxProfit : maxLoss);

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
  }, [data, maxLoss, maxProfit, labelsSectionHeight]);

  return (
    <BarChartWrapper className={className} ref={wrapperRef} labelsSectionHight={labelsSectionHeight}>
      {barElements}
    </BarChartWrapper>
  );
};
