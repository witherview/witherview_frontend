import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './pages/404';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
