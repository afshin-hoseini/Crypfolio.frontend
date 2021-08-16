import React, { FC } from 'react';
import { SecondaryText } from 'src/components/Text';
import { BarItemWarpper } from './styles';

export const BarItem: FC<BarItemProps> = ({ data, label, labelSectionHeight, heightPercentage, space, barWidth }) => {
  const barType = (data.profitPercentage ?? 0) > 0 ? 'profit' : 'loss';
  const wrapperWidth = space * 2 + barWidth;

  return (
    <BarItemWarpper style={{ minWidth: wrapperWidth }}>
      <div className="bar-section">
        <span
          className={`bar-span ${barType}`}
          style={{ height: `${heightPercentage}%`, left: space, width: barWidth }}
        />
      </div>
      <div className="label-section" style={{ height: labelSectionHeight }}>
        <SecondaryText className="label">{label || data.symbol}</SecondaryText>
      </div>
    </BarItemWarpper>
  );
};
