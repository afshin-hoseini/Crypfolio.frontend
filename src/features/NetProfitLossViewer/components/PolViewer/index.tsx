import React, { FC } from 'react';
import { PolViewerContainer } from '../styles';
import { PolViewerComponentProps } from '../../@types';
import { PolItem } from './PolItem';
import { faPercentage, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const PolViewer: FC<PolViewerComponentProps> = ({ percentage, amount, className = '' }) => {
  const { t } = useTranslation();

  return (
    <PolViewerContainer className={`${className}`} title={t('global:features.polViewer.title')}>
      <PolItem icon={faPercentage} formattedAmount={percentage.toFixed(2)} />
      <PolItem icon={faDollarSign} formattedAmount={amount.toFixed(2)} />
    </PolViewerContainer>
  );
};
