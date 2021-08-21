import React from 'react';
import { Route } from 'react-router';
import { NavigationMenu } from 'src/features/NavigationMenu';
import { OverviewPage } from '../OverviewPage';
import { DashboardContainer } from './styles';
import { MainTitle } from 'src/components/Text';
import { DashboardPageConsumer, DashboardPageProvider } from './Context';
import { DetailsPage } from '../DetailsPage';
import { DashboardContent } from './DashboardContent';
import { Switch, useLocation } from 'react-router-dom';
import { SettingsPage } from '../SettingsPage';

/**
 * Wraps dashboard content and applies transition base on location.
 */
export const DashboardPage = () => {
  const location = useLocation();

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

          <article className="main-content">
            <Switch location={location}>
              <Route exact path="/" component={OverviewPage} />
              <Route exact path="/details" component={DetailsPage} />
              <Route exact path="/settings" component={SettingsPage} />
            </Switch>
          </article>
        </DashboardContent>
      </DashboardContainer>
    </DashboardPageProvider>
  );
};
