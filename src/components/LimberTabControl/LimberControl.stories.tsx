import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LimberTabControl } from '.';
import {faChartLine, faChartBar, faWrench} from '@fortawesome/free-solid-svg-icons'; 
import { TabItemsContainerComponentProps } from './@types';


export default {
    component: LimberTabControl,
    title: "Components/Limber Tab Control"
} as Meta;

const Template : Story<TabItemsContainerComponentProps> = (args)=> (
    <div style={{width:180, background: '#d4fff1', padding: "20px 0px"}}>
        <LimberTabControl {...args}/>
    </div>
)

export const SimpleUsage= Template.bind({});
SimpleUsage.args = {
    items: [
        {icon:faChartLine, title:"Overview"},
        {icon:faChartBar, title:"Details"},
        {icon:faWrench, title:"Settings"}
    ]
}