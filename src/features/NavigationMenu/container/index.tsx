import React from 'react';
import { SideMenuComponent } from '../components/Sidemenu';

import { faChartLine, faChartBar, faWrench } from '@fortawesome/free-solid-svg-icons';
import { NavigationMenuProps } from '../@types';

const MenuItems = [
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
];
// TODO: connect it react router
export const NavigationMenu = ({ className }: NavigationMenuProps) => (
  <SideMenuComponent items={MenuItems} className={className} />
);
