import React from 'react';
import { Route } from 'react-router';
import { NavigationMenu } from 'src/features/NavigationMenu';
import { OverviewPage } from '../OverviewPage';
import { DashboardContainer, DashboardContent } from './styles';

export const DashboardPage = () => {
  return (
    <DashboardContainer>
      <NavigationMenu className="nav-menu" />
      <DashboardContent>
        <Route path="/" component={OverviewPage} />
      </DashboardContent>
    </DashboardContainer>
  );
};
