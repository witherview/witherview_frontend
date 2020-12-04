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
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const WrapSubTitle = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  color: #3d3d3d;
  padding-top: 35px;
  padding-bottom: 54px;
`;

const WrapBox = styled.div`
  width: 686px;
  height: 600px;
  background-color: white;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  color: #6e6eff;
  padding-bottom: 19px;
`;

const WrapContianer = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
`;

const WrapMiddleContainer = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 533px;
`;

const WrapMiddlePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

const WrapMiddleText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  color: #9e9e9e;
`;

const WrapMiddleTextLeft = styled(WrapMiddleText)`
  user-select: none;
  &:hover {
    border-bottom: 1px solid #9e9e9e;
  }
`;

const WrapBottomContainer = styled.div`
  padding-top: 40px;
`;

const WrapBottomText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  color: #9e9e9e;
  padding-right: 20px;
`;

const WrapAnker = styled.span`
  font-size: 20px;
  color: #6e6eff;
  user-select: none;
  &:hover {
    border-bottom: 1px solid #6e6eff;
  }
`;

export default function LoginPage() {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
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

  return (
    <Wrapper>
      {authSelector.isLogin && <Redirect to="/questionlist" />}
      <WrapContent>
        <img src={witherviewLogo} alt="logo" />
        <WrapSubTitle>
          위더뷰와 함께 화상 면접 연습을 진행해보세요.
        </WrapSubTitle>
        <WrapBox>
          <div>
            <WrapText>이메일 주소</WrapText>
            <InputBar
              placeholder="이메일 주소를 입력해주세요."
              onChange={handleInput}
              name="email"
            />
          </div>

          <WrapContianer>
            <WrapText>비밀번호</WrapText>
            <InputBar
              placeholder="비밀번호를 입력해주세요."
              onChange={handleInput}
              name="password"
              type="password"
            />
            <WrapMiddleContainer>
              <WrapMiddlePart>
                {/* TODO: 이부분 동작하도록 만들어야 함 아마 로그인 유지가 아니라 이메일 유지로 바뀔듯 */}
                <Checkbox />
                <WrapMiddleText>로그인 상태 유지</WrapMiddleText>
              </WrapMiddlePart>
              {/* TODO: onClick history.push로 이동하는 부분으로 변경 */}
              <WrapMiddleTextLeft onClick={() => {}}>
                비밀번호 찾기
              </WrapMiddleTextLeft>
            </WrapMiddleContainer>
          </WrapContianer>
          <Button theme="blue" func={handleLogin} text="로그인" />
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
