import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';

import LandingPage from '@pages/LandingPage';

import AuthRoute from '@components/AuthRoute';
import NotFound from '@pages/404';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import WelcomePage from '@pages/WelcomePage';
import QuestionListPage from '@pages/QuestionListPage';
import QuestionPage from '@pages/QuestionPage';

import SelfTrainEntryPage from '@pages/SelfTrainEntryPage';
import SelfTrainSettingPage from '@pages/SelfTrainSettingPage';
import SelfTrainPage from '@pages/SelfTrainPage';

import SelfStudyChecklist from '@pages/SelfStudyChecklistPage';
import PeerStudyMainPage from '@pages/PeerStudyMainPage';
import PeerStudyTrainPage from '@pages/PeerStudyTrainPage';

import PeerStudyRoomPage from '@pages/PeerStudyRoomPage';

import MyVideoPage from '@pages/MyVideoPage';
import VideoPage from '@pages/VideoPage';
import MyPage from '@pages/MyPage';

import FragileRatioPage from '@pages/FragileRatioPage';

import Sidebar from '@components/Sidebar';
import ProfileMenuContainer from '@components/ProfileMenuContainer';

import useWindowSize from '@hooks/useWindowSize';

import GlobalStyles from './style/globalStyles';

import { get } from './utils/snippet';

const Wrapper = styled.div`
  display: flex;
`;

const WrapPage = styled.div`
  display: flex;
  ${({ toggleTrain }) => (toggleTrain
    ? 'width: 100vw;'
    : 'height: 100vh; width: calc(100vw - 15.9vh); padding-left: 15.9vh;')}
`;

const WrapSpinner = styled.div`
  z-index: 30;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const { name } = useSelector(get('auth'));
  const { toggleTrain, isLoading } = useSelector(get('train'));
  const { ratio } = useWindowSize();

  // TIP: 새로고침에 랜딩페이지로 가지 않도록 할려면 AuthRoute를 Route로 바꾸면 된다.
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <AuthRoute exact path="/welcome" component={WelcomePage} />
        {isLoading && (
          <WrapSpinner>
            <SyncLoader size={50} color="#123abc" />
          </WrapSpinner>
        )}
        {ratio < 1.6 && <FragileRatioPage />}
        <Wrapper>
          {!toggleTrain && <Sidebar />}
          {!toggleTrain && <ProfileMenuContainer name={name} />}
          <WrapPage toggleTrain={toggleTrain}>
            <Route exact path="/self" component={SelfTrainEntryPage} />
            <AuthRoute
              exact
              path="/questionlist"
              component={QuestionListPage}
            />
            <AuthRoute path="/question/:id" component={QuestionPage} />
            <AuthRoute
              path="/self/setting/:id"
              component={SelfTrainSettingPage}
            />
            <AuthRoute path="/self-train/:id" component={SelfTrainPage} />
            <AuthRoute
              exact
              path="/self-checklist/:roomId"
              component={SelfStudyChecklist}
            />
            <AuthRoute exact path="/myvideo" component={MyVideoPage} />
            <AuthRoute exact path="/video/:id" component={VideoPage} />
            <AuthRoute path="/group-study" component={PeerStudyMainPage} />
            <AuthRoute path="/study-room/:id" component={PeerStudyRoomPage} />
            <AuthRoute
              path="/peer-study/:roomId"
              component={PeerStudyTrainPage}
            />
            <AuthRoute path="/mypage" component={MyPage} />
          </WrapPage>
        </Wrapper>
        <AuthRoute component={NotFound} />
      </Switch>
    </>
  );
}
