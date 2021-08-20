import React from 'react';
import { OverviewTableComponent } from '../components/OverviewTable';
import { mockVaultData } from './const';

export const OverviewTable = ({ className = '' }) => {
  return <OverviewTableComponent className={className} vaultsData={mockVaultData} onAddTrade={console.log} />;
};
