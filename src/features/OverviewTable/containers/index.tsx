import React from 'react';
import { OverviewTableComponent } from '../components/OverviewTable';
import { mockVaultData } from './const';

export const OverviewTable = () => {
  return <OverviewTableComponent vaultsData={mockVaultData} onAddTrade={console.log} />;
};
