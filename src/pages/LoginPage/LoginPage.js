/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';
import { get } from '@utils/snippet';
import { setLogin } from '@store/Auth/auth';
import { LoginApi } from '@repository/loginRepository';

import InputBar from '@components/InputBar';
import Checkbox from '@components/Checkbox';
import Button from '@components/Button';

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
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  color: #3d3d3d;
  padding-top: 3.5vh;
  padding-bottom: 5.4vh;
`;

const WrapBox = styled.div`
  width: 68.6vh;
  height: 60vh;
  background-color: white;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
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
`;

const WrapContianer = styled.div`
  margin-top: 5vh;
  margin-bottom: 4vh;
`;

const WrapUpperContainer = styled.div`
  height: 23vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const WrapInput = styled.div`
  > input {
    width: 53.3vh;
    height: 5vh;
    font-size: 1.5vh;
    ::placeholder {
      font-size: 2vh;
    }
    :-ms-input-placeholder {
      font-size: 2vh;
    }
    ::-ms-input-placeholder {
      font-size: 2vh;
    }
  }
`;

const WrapMiddleContainer = styled.div`
  height: 12vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 53.3vh;
`;

const WrapMiddlePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20vh;
  > label {
    > span {
      top: -1.8vh;
      width: 3.6vh;
      height: 3.6vh;
      border-radius: 1vh;
      &::after {
        top: 0.3vh;
        left: 1.2vh;
        width: 1vh;
        height: 2vh;
      }
    }
  }
`;

const WrapMiddleText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  color: #9e9e9e;
`;

const WrapMiddleTextLeft = styled(WrapMiddleText)`
  user-select: none;
  &:hover {
    border-bottom: 1px solid #9e9e9e;
  }
`;

const WrapButton = styled.div`
  > div {
    width: 29.6vh;
    height: 6vh;
    > p {
      font-size: 1.9vh;
    }
  }
`;

const WrapBottomContainer = styled.div`
  padding-top: 4vh;
`;

const WrapBottomText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  color: #9e9e9e;
  padding-right: 2vh;
`;

const WrapAnker = styled.span`
  font-size: 1.9vh;
  color: #6e6eff;
  user-select: none;
  &:hover {
    border-bottom: 1px solid #6e6eff;
  }
`;

const EMPTY_FORM = {
  email: '',
  password: '',
};

const TEST_FORM = {
  email: 'test@test.com',
  password: '123456',
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));

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
    LoginApi(JSON.stringify(loginForm))
      .then((response) => {
        console.log(response.data);
        const email = JSON.stringify(response.data.email).replace(/\"/g, '');
        const name = JSON.stringify(response.data.name).replace(/\"/g, '');
        dispatch(setLogin({ email, name }));
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
        <WrapSubTitle>
          위더뷰와 함께 화상 면접 연습을 진행해보세요.
        </WrapSubTitle>
        <WrapBox>
          <WrapContianer>
            <WrapUpperContainer>
              <WrapInput>
                <WrapText>이메일 주소</WrapText>
                <InputBar
                  disabled={toggleCheck}
                  autoFocus
                  value={loginForm.email}
                  placeholder="이메일 주소를 입력해주세요."
                  onChange={handleInput}
                  name="email"
                />
              </WrapInput>
              <WrapInput>
                <WrapText>비밀번호</WrapText>
                <InputBar
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
                {/* TODO: 이부분 동작하도록 만들어야 함 아마 로그인 유지가 아니라 이메일 유지로 바뀔듯 - local storage 사용하게 될 듯 */}
                <Checkbox func={handleCheck} />
                <WrapMiddleText>테스트 계정 사용</WrapMiddleText>
              </WrapMiddlePart>
              {/* TODO: onClick history.push로 이동하는 부분으로 변경 */}
              <WrapMiddleTextLeft onClick={() => {}}>
                비밀번호 찾기
              </WrapMiddleTextLeft>
            </WrapMiddleContainer>
          </WrapContianer>
          <WrapButton>
            <Button theme="blue" func={handleLogin} text="로그인" />
          </WrapButton>
        </WrapBox>
        <WrapBottomContainer>
          <WrapBottomText>새로오셨나요?</WrapBottomText>
          {/* TODO: onClick history.push로 이동하는 부분으로 변경 */}
          <WrapAnker onClick={() => {}}>회원가입</WrapAnker>
        </WrapBottomContainer>
      </WrapContent>
    </Wrapper>
  );
}
