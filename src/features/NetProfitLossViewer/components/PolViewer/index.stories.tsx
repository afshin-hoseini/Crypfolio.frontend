import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PolViewer } from '.';
import { PolViewerComponentProps } from '../../@types';

export default {
  component: PolViewer,
  title: 'Features/NetProfitOrLoss/POLViewer',
} as Meta;

const Template: Story<PolViewerComponentProps> = (args) => <PolViewer {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  percentage: 12,
  amount: 20,
};

export const UnformattedValues = Template.bind({});
UnformattedValues.args = {
  percentage: 12.11203405,
  amount: 20.333663543,
};
