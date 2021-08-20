import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from '../components/BarChart';
import { data as mockData } from '../components/BarChart/mockData';
export const OverviewBarChart: FC = () => {
  const vaults = useSelector((state) => state.vaults?.vaults);

  return <BarChart data={vaults || mockData} />;
};
