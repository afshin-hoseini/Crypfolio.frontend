import React from 'react';
import { PolViewer } from '../components/PolViewer';

const MockPnlData = {
  percentage: 12.11203405,
  amount: 20.333663543,
};

export const NetProfitLossViewer = () => {
  return <PolViewer amount={MockPnlData.amount} percentage={MockPnlData.percentage} />;
};
