import React from 'react';
import { Route } from 'react-router';
import { NavigationMenu } from 'src/features/NavigationMenu';
import { OverviewPage } from '../OverviewPage';
import { DashboardContainer, DashboardContent } from './styles';
import { MainTitle } from 'src/components/Text';
import { DashboardPageConsumer, DashboardPageProvider } from './Context';
import { DetailsPage } from '../DetailsPage';

export const DashboardPage = () => {
  return (
    <DashboardPageProvider>
      <DashboardContainer>
        <NavigationMenu className="nav-menu" />
        <DashboardContent>
          <DashboardPageConsumer>
            {({ title }) => {
              if (!title) return null;
              if (typeof title === 'string') return <MainTitle color="primary">{title}</MainTitle>;
              return title;
            }}
          </DashboardPageConsumer>
          <Route exact path="/" component={OverviewPage} />
          <Route exact path="/details" component={DetailsPage} />
        </DashboardContent>
      </DashboardContainer>
    </DashboardPageProvider>
  );
};
