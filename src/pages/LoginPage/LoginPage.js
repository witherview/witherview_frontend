/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ReactRouterPropTypes from 'react-router-prop-types';

import styled from 'styled-components';

import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';
import { get } from '@utils/snippet';
import { setLogin } from '@store/Auth/auth';
import { loginApi } from '@repository/loginRepository';

import A from '@atoms';

import useWindowSize from '@hooks/useWindowSize';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9ff;
`;

const WrapContent = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 6vh;
`;

const WrapSubTitle = styled.div`
  max-width: 80vw;
  text-align: center;
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  line-height: 3vh;
  color: #3d3d3d;
  padding-top: 3.5vh;
  padding-bottom: 5.4vh;
  pointer-events: none;
`;

const WrapBox = styled.div`
  width: 68.6vh;
  max-width: 80vw;
  height: 60vh;
  background-color: white;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.1vh #f6f6f6;
  border-radius: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 2.4vh;
  color: #6e6eff;
  padding-bottom: 1.9vh;
  pointer-events: none;
`;

const WrapContianer = styled.div`
  max-width: 60vw;
`;

const WrapUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapInput = styled.div`
  margin-top: 1vh;
  margin-bottom: 5vh;
  ${({ theme }) => theme.input}
`;

const WrapMiddleContainer = styled.div`
  height: 10vh;
  max-width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 53.3vh;
`;

const WrapMiddlePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20vh;
`;

const WrapMiddleText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  color: #9e9e9e;
  pointer-events: none;
`;

const WrapMiddleTextRight = styled(WrapMiddleText)`
  user-select: none;
  &:hover {
    border-bottom: 0.1vh solid #9e9e9e;
  }
  cursor: pointer;
`;

const WrapButton = styled.div`
  ${({ theme }) => theme.button}
`;

const WrapBottomContainer = styled.div`
  padding-top: 4vh;
`;

const WrapBottomText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  color: #9e9e9e;
  padding-right: 2vh;
  cursor: default;
`;

const WrapAnker = styled.span`
  font-size: 1.9vh;
  color: #6e6eff;
  user-select: none;
  &:hover {
    border-bottom: 0.1vh solid #6e6eff;
  }
  cursor: pointer;
`;

const EMPTY_FORM = {
  email: '',
  password: '',
};

const TEST_FORM = {
  email: 'test@test.com',
  password: '123456',
};

export default function LoginPage({ history }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));

  const { ratio } = useWindowSize();

  const [loginForm, setLoginForm] = useState(EMPTY_FORM);
  const [toggleCheck, setToggleCheck] = useState(false);

  const handleInput = (e) => {
    setLoginForm({});
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    loginApi(JSON.stringify(loginForm))
      .then((response) => {
        const email = JSON.stringify(response.data.email).replace(/\"/g, '');
        const name = JSON.stringify(response.data.name).replace(/\"/g, '');
        const mainIndustry = JSON.stringify(response.data.mainIndustry).replace(
          /\"/g,
          '',
        );
        const mainJob = JSON.stringify(response.data.mainJob).replace(/\"/g, '');
        const subIndustry = JSON.stringify(response.data.subIndustry).replace(
          /\"/g,
          '',
        );
        const subJob = JSON.stringify(response.data.subJob).replace(/\"/g, '');
        const image = JSON.stringify(response.data.profileImg).replace(/\"/g, '');

        dispatch(
          setLogin({
            email,
            name,
            mainIndustry,
            mainJob,
            subIndustry,
            subJob,
            image,
          }),
        );
      })
      .catch(() => {
        alert('로그인 실패');
      });
  };

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setToggleCheck(isChecked);
    if (isChecked) {
      return setLoginForm(TEST_FORM);
    }
    return setLoginForm(EMPTY_FORM);
  };

  return (
    <Wrapper>
      {authSelector.isLogin && <Redirect to="/self" />}
      <WrapContent>
        <Logo src={witherviewLogo} alt="logo" />
        <WrapSubTitle>위더뷰가 처음이신가요? 정보를 입력해주세요.</WrapSubTitle>
        <WrapBox>
          <WrapContianer>
            <WrapUpperContainer>
              <WrapInput>
                <WrapText>이메일 주소</WrapText>
                <A.InputBar
                  disabled={toggleCheck}
                  autoFocus={ratio > 0.65}
                  value={loginForm.email}
                  placeholder="이메일 주소를 입력해주세요."
                  onChange={handleInput}
                  name="email"
                />
              </WrapInput>
              <WrapInput>
                <WrapText>비밀번호</WrapText>
                <A.InputBar
                  disabled={toggleCheck}
                  value={loginForm.password}
                  placeholder="비밀번호를 입력해주세요."
                  onChange={handleInput}
                  name="password"
                  type="password"
                />
              </WrapInput>
            </WrapUpperContainer>
            <WrapMiddleContainer>
              <WrapMiddlePart>
                {/* 로그인 유지가 아니라 이메일 유지로 바뀔듯 - local storage 사용하도록 변경 */}
                <A.CheckBox func={handleCheck} />
                <WrapMiddleText>테스트 계정 사용</WrapMiddleText>
              </WrapMiddlePart>
              {ratio > 0.65 && (
                <WrapMiddleTextRight onClick={() => {}}>
                  {/* TODO: onClick history.push로 이동하는 부분으로 변경 */}
                  비밀번호 찾기
                </WrapMiddleTextRight>
              )}
            </WrapMiddleContainer>
          </WrapContianer>
          <WrapButton>
            <A.Button theme="blue" func={handleLogin} text="로그인" />
          </WrapButton>
        </WrapBox>
        <WrapBottomContainer>
          <WrapBottomText>새로오셨나요?</WrapBottomText>
          <WrapAnker onClick={() => history.push('/sign-up')}>
            회원가입
          </WrapAnker>
        </WrapBottomContainer>
      </WrapContent>
    </Wrapper>
  );
}

LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
