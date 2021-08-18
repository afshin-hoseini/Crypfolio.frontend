import React, { FC, useEffect, useRef, useState } from 'react';
import { SecondaryText } from 'src/components/Text';
import { BarItemWarpper } from './styles';

export const BarItem: FC<BarItemProps> = ({
  data,
  label,
  labelSectionHeight,
  heightPercentage,
  space,
  barWidth,
  index,
  tooltipId,
}) => {
  const barType = (data.profitPercentage ?? 0) > 0 ? 'profit' : 'loss';
  const wrapperWidth = space * 2 + barWidth;
  const [initialized, setInitialized] = useState<boolean>(false);
  const isMounted = useRef(true);

  useEffect(() => {
    const initializerTimeout = setTimeout(() => {
      isMounted.current && setInitialized(true);
    }, 10);

    return () => {
      isMounted.current = false;
      clearTimeout(initializerTimeout);
    };
  }, []);

  return (
    <BarItemWarpper style={{ minWidth: initialized ? wrapperWidth : 0 }}>
      <div className="bar-section" data-tip={index} data-for={tooltipId}>
        <span
          className={`bar-span ${barType}`}
          style={{ height: initialized ? `${heightPercentage}%` : 0, left: space, width: initialized ? barWidth : 0 }}
        />
      </div>
      <div className="label-section" style={{ height: labelSectionHeight }}>
        <SecondaryText className="label">{label || data.symbol}</SecondaryText>
      </div>
    </BarItemWarpper>
  );
};
