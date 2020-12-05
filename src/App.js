import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import { css } from '@emotion/react';

import LandingPage from '@pages/LandingPage';

import AuthRoute from '@components/AuthRoute';
import ConferenceButton from '@components/ConferenceButton';
import ConferenceRoom from '@pages/ConferenceRoom';
import NotFound from '@pages/404';
import LoginPage from '@pages/LoginPage';
import QuestionListPage from '@pages/QuestionListPage';
import QuestionPage from '@pages/QuestionPage';

import SelfTrainEntryPage from '@pages/SelfTrainEntryPage';
import SelfTrainSettingPage from '@pages/SelfTrainSettingPage';
import SelfTrainPage from '@pages/SelfTrainPage';

import AloneQuestionCheckList from '@pages/AloneQuestionCheckList';
import MyPage from '@pages/MyPage';

import Sidebar from '@components/Sidebar';
import ProfileMenuContainer from '@components/ProfileMenuContainer';
import { get } from './utils/snippet';

const Wrapper = styled.div`
  display: flex;
`;

export default function App() {
  const { name } = useSelector(get('auth'));
  const { toggleTrain, isLoading } = useSelector(get('train'));

  const override = css`
    z-index: 30;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <AuthRoute path="/conference" component={ConferenceButton} />
        <Route path="/room/:roomID" component={ConferenceRoom} />
        {isLoading && <SyncLoader css={override} size={50} color="#123abc" />}
        <Wrapper>
          <>
            {!toggleTrain && <Sidebar />}
            {!toggleTrain && <ProfileMenuContainer name={name} />}
            <AuthRoute
              exact
              path="/questionlist"
              component={QuestionListPage}
            />
            <AuthRoute path="/question/:id" component={QuestionPage} />
            <AuthRoute exact path="/self" component={SelfTrainEntryPage} />
            <AuthRoute
              path="/self/setting/:id"
              component={SelfTrainSettingPage}
            />
            <AuthRoute path="/self-train/:id" component={SelfTrainPage} />
            <AuthRoute
              exact
              path="/self-checklist/:id"
              component={AloneQuestionCheckList}
            />
            <AuthRoute exact path="/mypage" component={MyPage} />
          </>
        </Wrapper>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
