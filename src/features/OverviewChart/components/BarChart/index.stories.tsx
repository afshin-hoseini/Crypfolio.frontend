import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OverviewBarChart } from './index';
import { storyMockData as mockData } from './mockData';

export default {
  component: OverviewBarChart,
  title: 'Features/OverviewBarChart',
  argTypes: {
    dataCount: {
      control: {
        type: 'range',
        min: -1,
        max: mockData.length,
        step: 1,
      },
    },
  },
} as Meta;

type BarChartTemplateProps = OverviewChartProps & { dataCount: number };

const BarChartTemplate: Story<BarChartTemplateProps> = ({ data, dataCount, ...rest }) => {
  const d = dataCount > -1 ? data?.slice(0, dataCount) : data;
  return <OverviewBarChart {...rest} data={d} />;
};

export const SimpleBarChart = BarChartTemplate.bind({});
SimpleBarChart.args = {
  data: mockData,
  dataCount: -1,
};
