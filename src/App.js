import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';

import LandingPage from '@pages/LandingPage';

import R from '@routes';
import O from '@organisms';

import NotFound from '@pages/404';
import LoginPage from '@pages/LoginPage';
import PasswordPage from '@pages/PasswordPage';
import SignUpPage from '@pages/SignUpPage';
import WelcomePage from '@pages/WelcomePage';
import QuestionListPage from '@pages/QuestionListPage';
import QuestionPage from '@pages/QuestionPage';

import SelfTrainEntryPage from '@pages/SelfTrainEntryPage';
import SelfTrainSettingPage from '@pages/SelfTrainSettingPage';
import SelfTrainPage from '@pages/SelfTrainPage';
import SelfTrainChecklistPage from '@pages/SelfTrainChecklistPage';
import PeerStudyMainPage from '@pages/PeerStudyMainPage';

import MyVideoPage from '@pages/MyVideoPage';
import VideoPage from '@pages/VideoPage';
import MyPage from '@pages/MyPage';

import FragileRatioPage from '@pages/FragileRatioPage';

import WithdrawPage from '@pages/WithdrawPage';

import useWindowSize from '@hooks/useWindowSize';

import GlobalStyles from './style/globalStyles';

import { get } from './utils/snippet';

const Wrapper = styled.div`
  display: flex;
`;

const WrapPage = styled.div`
  display: flex;
  ${({ isBackgroundGrey }) => isBackgroundGrey && 'background-color: #f6f6f6;'}
  ${({ toggleTrain }) =>
    toggleTrain
      ? `
        width: 100vw;
        height: 100vh;
        .container {
          width: 100%;
        }
      `
      : `
        min-height: 90vh;
        height: 100%;
        width: calc(100vw - 10vh);
        padding-left: 10vh;
        display: flex;
        justify-content: center;
        padding-top: 10vh;
        .container {
          position: relative;
          width: 100%;
          max-width: 160vh;
          height: 90%;
        }
    `}
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
  const { pathname } = useLocation();

  const { name } = useSelector(get('auth'));
  const { toggleTrain, isLoading } = useSelector(get('train'));
  const { ratio } = useWindowSize();

  const PATH = pathname.split('/')[1];
  // TIP: 새로고침에 랜딩페이지로 가지 않도록 할려면 AuthRoute를 Route로 바꾸면 된다.
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/password-find" component={PasswordPage} />
        <Route exact path="/password-reset" component={PasswordPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/welcome" component={WelcomePage} />
        {isLoading && (
          <WrapSpinner>
            <SyncLoader size={50} color="#123abc" />
          </WrapSpinner>
        )}
        {ratio < 1.6 && <FragileRatioPage />}
        <Wrapper>
          {!toggleTrain && <O.SideBar />}
          <WrapPage
            toggleTrain={toggleTrain}
            isBackgroundGrey={PATH === 'mypage' || PATH === 'replay'}
          >
            <div className="container">
              {!toggleTrain && <O.ProfileMenuContainer name={name} />}

              <R.AuthRoute exact path="/self" component={SelfTrainEntryPage} />
              <R.AuthRoute
                exact
                path="/self/questionlist"
                component={QuestionListPage}
              />
              <R.AuthRoute
                exact
                path="/self/question/:id"
                component={QuestionPage}
              />
              <R.AuthRoute
                exact
                path="/self/setting/:id"
                component={SelfTrainSettingPage}
              />
              <R.AuthRoute
                exact
                path="/self/train/:id"
                component={SelfTrainPage}
              />
              <R.AuthRoute
                exact
                path="/self/checklist/:roomId"
                component={SelfTrainChecklistPage}
              />
              <R.AuthRoute exact path="/replay" component={MyVideoPage} />
              <R.AuthRoute exact path="/replay/:id" component={VideoPage} />
              <R.AuthRoute
                exact
                path="/peer-study"
                component={PeerStudyMainPage}
              />
              <R.AuthRoute
                exact
                path="/peer-study/:id"
                component={R.PeerStudyRoute}
              />
              <R.AuthRoute exact path="/mypage" component={MyPage} />
              <R.AuthRoute exact path="/withdraw" component={WithdrawPage} />
            </div>
          </WrapPage>
        </Wrapper>
        <R.AuthRoute component={NotFound} />
      </Switch>
    </>
  );
}
