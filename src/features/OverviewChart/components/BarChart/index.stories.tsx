import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { OverviewBarChart } from './index';

export default {
  component: OverviewBarChart,
  title: 'Features/OverviewBarChart',
} as Meta;

export const Simple = () => <OverviewBarChart />;
