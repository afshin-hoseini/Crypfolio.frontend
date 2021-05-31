import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { DashboardPage } from 'src/pages/Dashboard';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={() => <span>Not implemented yet...!</span>} />
        <Route path="/" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
};
