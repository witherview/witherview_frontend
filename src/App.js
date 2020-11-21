import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ConferenceButton from './components/ConferenceButton';
import ConferenceRoom from './pages/ConferenceRoom';
import NotFound from './pages/404';
import ModalWrapper from './pages/ModalWrapper';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ConferenceButton} />
        <Route path="/room/:roomID" component={ConferenceRoom} />
        <Route component={NotFound} />
      </Switch>
      <ModalWrapper></ModalWrapper>
    </>
  );
}
