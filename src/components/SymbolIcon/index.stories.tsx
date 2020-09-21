import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SymbolIcon } from '.';
import { ColorMode, SymbolIconProps } from './@types';

export default {
  component: SymbolIcon,
  title: 'Components/SymbolIcon',
} as Meta;

const Template: Story<SymbolIconProps> = (args) => <SymbolIcon {...args} />;

export const ColorfulSample = Template.bind({});
ColorfulSample.args = {
  symbol: 'BTC',
  color: ColorMode.Colorful,
};

export const WhiteSample = Template.bind({});
WhiteSample.args = {
  symbol: 'XTZ',
  color: ColorMode.White,
};

WhiteSample.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#414141', default: true }],
  },
};
