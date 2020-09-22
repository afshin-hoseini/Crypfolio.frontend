import { Meta, Story } from '@storybook/react/types-6-0';
import React, { PropsWithChildren } from 'react';
import { getValues } from 'src/utils';
import { Button } from '.';
import { ButtonComponentProps, ButtonType } from './@types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: getValues(ButtonType),
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'neutral', 'accent', 'contrast'],
      },
    },
  },
} as Meta;

const ContainedTemplate: Story<PropsWithChildren<ButtonComponentProps> & { type: ButtonType }> = (args) => (
  <Button {...args} />
);

export const Contained = ContainedTemplate.bind({});
Contained.args = {
  children: 'Click me',
  buttonType: ButtonType.Contained,
};
Contained.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Outlined = ContainedTemplate.bind({});
Outlined.args = {
  children: 'Outlined button',
  buttonType: ButtonType.Outlined,
  color: 'primary',
};

export const CustomContent = ContainedTemplate.bind({});
CustomContent.args = {
  children: (
    <span>
      <FontAwesomeIcon icon={faPlus} /> Add new Item
    </span>
  ),
  buttonType: ButtonType.Outlined,
  color: 'primary',
};
