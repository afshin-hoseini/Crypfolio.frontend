import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SideMenuComponent } from '.';
import { faChartLine, faChartBar, faWrench } from '@fortawesome/free-solid-svg-icons';

export default {
  component: SideMenuComponent,
  title: 'Features/NavigationMenu',
} as Meta;

export const SideMenuWithoutId = () => (
  <SideMenuComponent
    items={[
      {
        icon: faChartLine,
        title: 'Overview',
        id: 'ov',
      },
      {
        icon: faChartBar,
        title: 'Details',
        id: 'de',
      },
      {
        icon: faWrench,
        title: 'Settings',
        id: 'settings',
      },
    ]}
  />
);

export const SideMenuWithId = () => (
  <SideMenuComponent
    items={[
      {
        icon: faChartLine,
        title: 'Overview',
        id: 'ov',
      },
      {
        icon: faChartBar,
        title: 'Details',
        id: 'de',
      },
      {
        icon: faWrench,
        title: 'Settings',
        id: 'settings',
      },
    ]}
    selectedId="de"
  />
);

export const ControlledSideMenu = () => (
  <SideMenuComponent
    items={[
      {
        icon: faChartLine,
        title: 'Overview',
        id: 'ov',
      },
      {
        icon: faChartBar,
        title: 'Details',
        id: 'de',
      },
      {
        icon: faWrench,
        title: 'Settings',
        id: 'settings',
      },
    ]}
    selectedId="de"
    onItemSelected={(item) => alert(`You selected ${item.title} item.`)}
  />
);
