import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { FilterSelect } from '.';

export default {
  component: FilterSelect,
  title: 'Components/FilterSelect',
} as Meta;

const Template: Story<ComponentProps<typeof FilterSelect>> = (args) => <FilterSelect {...args} />;

export const MultiSelectFilter = Template.bind({});
MultiSelectFilter.args = {
  options: [
    { value: 'Item1', label: 'Cat' },
    { value: 'Item2', label: 'Dog' },
    { value: 'Item3', label: 'Duck' },
    { value: 'Item4', label: 'Squirrel' },
  ],
};
MultiSelectFilter.parameters = {
  backgrounds: {
    default: 'light',
  },
};
