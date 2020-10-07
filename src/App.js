import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Button from './components/Button';
import NotFound from './pages/404';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Button} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
