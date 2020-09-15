import React, { ReactNode } from 'react';
import { ContainerComponentProps, ContainerMode } from './@types';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from '.';

export default {
    component: Container,
    title: "Components/Container"
} as Meta;

type props = ContainerComponentProps & {children: ReactNode}
const Template : Story<props> = (args)=> {

    return (
        <div style={{width: 220}}>
            <Container {...args}/>
        </div>
    )
}

export const MainContainer = Template.bind({});
MainContainer.args = {
    mode: ContainerMode.Main,
}

export const SecondaryContainer = Template.bind({});
SecondaryContainer.args = {
    mode: ContainerMode.Secondary,
}

export const PrimaryContainer = Template.bind({});
PrimaryContainer.args = {
    mode: ContainerMode.Primary,
}

export const AccentContainer = Template.bind({});
AccentContainer.args = {
    mode: ContainerMode.Accent,
}

export const WithTitle = Template.bind({});
WithTitle.args = {
    mode: ContainerMode.Accent,
    title: "Profit and loss"
}