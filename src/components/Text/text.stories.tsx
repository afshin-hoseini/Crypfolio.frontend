import React, { ComponentType } from 'react';
import { Text, MainTitle } from '.';
import { TextProps, TextType } from './@types';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Text and titles',
  component: Text,
} as Meta;

type Props = TextProps & {
  children?: any;
  TextComponent?: ComponentType;
};

const Template: Story<Props> = (args: Props) => {
  const rawArgs = { ...args };
  delete rawArgs['TextComponent'];

  const txtCmpArgs: Partial<Props> = { ...args };
  delete txtCmpArgs['type'];

  return (
    <>
      <p>
        Using <code>Text</code> component
      </p>
      <Text {...rawArgs} />

      <p>
        Using <code>{args.TextComponent?.displayName}</code> component
      </p>
      {args.TextComponent && <args.TextComponent {...txtCmpArgs} />}
    </>
  );
};

export const MainTitle1 = Template.bind({});
MainTitle1.args = {
  type: TextType.MainTitle,
  children: 'Afshin',
  TextComponent: MainTitle,
};

export const Head1 = Template.bind({});
Head1.args = {
  type: TextType.Header1,
  children: 'Hosseini',
};
