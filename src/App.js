import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';

import LandingPage from '@pages/LandingPage';

import AuthRoute from '@components/AuthRoute';
import NotFound from '@pages/404';
import LoginPage from '@pages/LoginPage';
import QuestionListPage from '@pages/QuestionListPage';
import QuestionPage from '@pages/QuestionPage';

import SelfTrainEntryPage from '@pages/SelfTrainEntryPage';
import SelfTrainSettingPage from '@pages/SelfTrainSettingPage';
import SelfTrainPage from '@pages/SelfTrainPage';

import AloneQuestionCheckList from '@pages/AloneQuestionCheckList';

import MyVideoPage from '@pages/MyVideoPage';
import VideoPage from '@pages/VideoPage';

import Sidebar from '@components/Sidebar';
import ProfileMenuContainer from '@components/ProfileMenuContainer';

import { get } from './utils/snippet';

const MyPage = lazy(() => import('@pages/MyPage'));
const StudyMainPage = lazy(() => import('@pages/StudyMainPage'));
const InterviewStudyEntry = lazy(() => import('@pages/InterviewStudyEntry'));

const Wrapper = styled.div`
  display: flex;
`;

const WrapSpinner = styled.div`
  z-index: 30;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loading = () => (
  <WrapSpinner>
    <SyncLoader size={50} color="#123abc" />
  </WrapSpinner>
);

export default function App() {
  const { name } = useSelector(get('auth'));
  const { toggleTrain, isLoading } = useSelector(get('train'));

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        {isLoading && (
          loading
        )}
        <Wrapper>
          <>
            {!toggleTrain && <Sidebar />}
            {!toggleTrain && <ProfileMenuContainer name={name} />}
            <Suspense fallback={loading}>

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
              <AuthRoute path="/group-study" component={StudyMainPage} />
              <AuthRoute path="/study-room/:id" component={InterviewStudyEntry} />
              <AuthRoute exact path="/mypage" component={MyPage} />
              <Route exact path="/myvideo" component={MyVideoPage} />
              <Route exact path="/video/:id" component={VideoPage} />
            </Suspense>
          </>
        </Wrapper>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
