import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { get } from './utils/snippet';

import AuthRoute from './components/AuthRoute';
import ConferenceButton from './components/ConferenceButton';
import ConferenceRoom from './pages/ConferenceRoom';
import NotFound from './pages/404';
import LoginPage from './pages/LoginPage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionPage from './pages/QuestionPage';
import SelfTrainPage from './pages/SelfTrainPage';
import AloneQuestionCheckList from './pages/AloneQuestionCheckList';

import Sidebar from './components/Sidebar';
import ProfileMenuContainer from './components/ProfileMenuContainer';

const Wrapper = styled.div`
  display: flex;
`;

export default function App() {
  const { name } = useSelector(get('auth'));
  const { toggleTrain } = useSelector(get('time'));

  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <AuthRoute path="/conference" component={ConferenceButton} />
        <Route path="/room/:roomID" component={ConferenceRoom} />
        <Wrapper>
          {!toggleTrain && <Sidebar />}
          {!toggleTrain && <ProfileMenuContainer name={name} />}
          <AuthRoute exact path="/questionlist" component={QuestionListPage} />
          <AuthRoute path="/question/:id" component={QuestionPage} />
          <AuthRoute path="/self-training" component={SelfTrainPage} />
          <AuthRoute path="/self-checklist" component={AloneQuestionCheckList} />
        </Wrapper>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
