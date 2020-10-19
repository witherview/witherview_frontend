import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TimeButton from './components/TimeButton';
import NotFound from './pages/404';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={TimeButton} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
