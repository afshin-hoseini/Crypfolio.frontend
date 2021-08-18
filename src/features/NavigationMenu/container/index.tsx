import React, { useCallback, useMemo } from 'react';
import { SideMenuComponent } from '../components/Sidemenu';

import { faChartLine, faChartBar, faWrench } from '@fortawesome/free-solid-svg-icons';
import { NavigationMenuProps } from '../@types';
import { useHistory, useLocation } from 'react-router-dom';

const MenuItems = [
  {
    icon: faChartLine,
    title: 'Overview',
    id: 'overview',
    path: '',
  },
  {
    icon: faChartBar,
    title: 'Details',
    id: 'details',
    path: 'details',
  },
  {
    icon: faWrench,
    title: 'Settings',
    id: 'settings',
    path: 'settings',
  },
];

export const NavigationMenu = ({ className }: NavigationMenuProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onItemSelected = useCallback((item) => history.push(item.path), [history]);

  /** Based on the location's path name, picks the matched menu item ID. */
  const selectedId = useMemo(() => {
    if (pathname === '/') return MenuItems[0].id;
    return MenuItems.find((item) => (item.path && pathname.indexOf(`/${item.path}`) === 0) ?? MenuItems[0])?.id;
  }, [pathname]);

  return (
    <SideMenuComponent
      selectedId={selectedId}
      items={MenuItems}
      className={className}
      onItemSelected={onItemSelected}
    />
  );
};
