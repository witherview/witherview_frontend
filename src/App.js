import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';
import ConferenceButton from './components/ConferenceButton';
import ConferenceRoom from './pages/ConferenceRoom';
import NotFound from './pages/404';
import LoginPage from './pages/LoginPage';
import QuestionListPage from './pages/QuestionListPage'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <AuthRoute path="/conference" component={ConferenceButton} />
        <AuthRoute path="/questionlist" component={QuestionListPage} />
        <Route path="/room/:roomID" component={ConferenceRoom} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
