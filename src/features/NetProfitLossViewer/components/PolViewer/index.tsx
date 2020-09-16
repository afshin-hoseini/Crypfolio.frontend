import React, { FC } from 'react';
import { PolViewerContainer } from '../styles';
import { PolViewerComponentProps } from '../../@types';
import { PolItem } from './PolItem';
import { faPercentage, faDollarSign } from '@fortawesome/free-solid-svg-icons';

export const PolViewer: FC<PolViewerComponentProps> = ({ percentage, amount, className = '' }) => {
  return (
    <PolViewerContainer className={`${className}`} title="Net profit or loss">
      <PolItem icon={faPercentage} formattedAmount={percentage.toFixed(2)} />
      <PolItem icon={faDollarSign} formattedAmount={amount.toFixed(2)} />
    </PolViewerContainer>
  );
};
