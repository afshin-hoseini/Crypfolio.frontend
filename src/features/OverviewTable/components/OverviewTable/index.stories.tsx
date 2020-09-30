import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OverviewTableComponent } from '.';
import { OverviewTableComponentProps } from '../../@types';

export default {
  component: OverviewTableComponent,
  title: 'Features/OverviewTable',
} as Meta;

const Template: Story<OverviewTableComponentProps> = (args) => (
  <div style={{ maxWidth: 600 }}>
    <OverviewTableComponent {...args}></OverviewTableComponent>
  </div>
);

export const SimpleUsage = Template.bind({});
SimpleUsage.args = {
  onVaultPinToggled: console.log,
  vaultsData: [
    {
      symbol: 'BTC',
      currentPrice: 10600.438239,
      profitAmount: 30,
      profitPercentage: 10,
      remainingAmount: 0.0593254,
      totalBuy: 1400.56456,
      totalSell: 49094,
      pinned: true,
    },
    {
      symbol: 'XTZ',
      currentPrice: 4.0345,
      profitAmount: -42.54,
      profitPercentage: -120,
      remainingAmount: 10,
      totalBuy: 800,
      totalSell: 910,
    },
    {
      symbol: 'TRX',
      currentPrice: 0.0345,
      profitAmount: 0,
      profitPercentage: 0,
      remainingAmount: 130,
      totalBuy: 100.56456,
      totalSell: 10,
    },
    {
      symbol: 'LEND',
      currentPrice: 0.5784,
      profitAmount: 10,
      profitPercentage: 30,
      remainingAmount: 130,
      totalBuy: 100.56456,
      totalSell: 10,
    },
  ],
};
