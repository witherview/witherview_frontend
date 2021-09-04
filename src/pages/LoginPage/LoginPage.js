/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import ReactRouterPropTypes from 'react-router-prop-types';

import styled from 'styled-components';

// import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';
import { loginApi } from '@repository/accountRepository';

import A from '@atoms';
import { commonStyles } from '@style';

import useWindowSize from '@hooks/useWindowSize';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme: { wrapContentBgColor } }) => wrapContentBgColor};
`;

const WrapContent = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img.attrs(({ theme: { mainLogo } }) => ({
  src: mainLogo,
}))`
  height: 6vh;
`;

const WrapSubTitle = styled.div`
  max-width: 80vw;
  text-align: center;
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  line-height: 3vh;
  color: ${({
    theme: {
      login: { wrapSubTitle },
    },
  }) => wrapSubTitle};
  padding-top: 3.5vh;
  padding-bottom: 5.4vh;
  pointer-events: none;
`;

const WrapBox = styled.div`
  width: 68.6vh;
  max-width: 80vw;
  height: 60vh;
  background-color: #ffffff;
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
  ${commonStyles.input}
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
`;

const WrapMiddleTextRight = styled(WrapMiddleText)`
  &:hover {
    border-bottom: 0.1vh solid #9e9e9e;
  }
  cursor: pointer;
`;

const WrapButton = styled.div`
  ${commonStyles.button}
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
  email: 'test7@test.com',
  password: '123456',
};

export default function LoginPage({ history }) {
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

  const handleLogin = async () => {
    try {
      const {
        data: { access_token: accessToken },
      } = await loginApi(JSON.stringify(loginForm));

      sessionStorage.setItem('accessToken', accessToken);
      history.push('/self');
    } catch (error) {
      console.error(error);
      alert(error);
    }
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
      {sessionStorage.getItem('accessToken') !== null && (
        <Redirect to="/self" />
      )}
      <WrapContent>
        <Logo alt="logo" />
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
                <WrapMiddleTextRight
                  onClick={() => history.push('/password-find')}
                >
                  비밀번호 찾기
                </WrapMiddleTextRight>
              )}
            </WrapMiddleContainer>
          </WrapContianer>
          <WrapButton>
            <A.Button btnTheme="blue" func={handleLogin} text="로그인" />
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
