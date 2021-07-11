/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import styled from 'styled-components';

import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';

import A from '@atoms';

import useWindowSize from '@hooks/useWindowSize';
import {
  passwordResetApi,
  passwordResetRequestEmailApi,
} from '@repository/accountRepository';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9ff;

  .content {
    height: 83vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      height: 6vh;
    }

    .sub-title {
      max-width: 80vw;
      text-align: center;
      font-family: AppleSDGothicNeoM00;
      font-size: 2.4vh;
      line-height: 3vh;
      color: #3d3d3d;
      padding-top: 3.5vh;
      padding-bottom: 5.4vh;
      pointer-events: none;
    }

    .box {
      width: 68.6vh;
      max-width: 80vw;
      height: ${({ mode }) => (mode === 'find' ? '35vh' : '38vh')};
      background-color: white;
      box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
      border: solid 0.1vh #f6f6f6;
      border-radius: 2vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .box-container {
        display: contents;
        > div {
          padding-top: 2vh;
          ${({ theme }) => theme.input}
        }
      }

      .button-container {
        display: flex;
        justify-content: center;
        padding-top: ${({ mode }) =>
          `${mode === 'find' ? '8vh' : '5.5vh'} !important;`};
        ${({ theme }) => theme.button}
      }
    }

    .footer {
      padding-top: 4vh;

      .footer-text {
        font-family: AppleSDGothicNeoM00;
        font-size: 1.9vh;
        color: #6e6eff;
        user-select: none;
        &:hover {
          border-bottom: 0.1vh solid #6e6eff;
        }
        cursor: pointer;
      }
    }
  }
`;

export default function FindPassword({ history, location }) {
  const { ratio } = useWindowSize();

  const [textObject, setTextObject] = useState({
    subTitle: '',
    placeholder: '',
    buttonText: '',
  });
  const [mode, setMode] = useState();
  const [token, setToken] = useState();
  const [value, setValue] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // TODO - validation 기능 머지 후 해당 이메일 validation 기능 추가

  const handleButtonEvent = async () => {
    if (mode === 'find') {
      try {
        await passwordResetRequestEmailApi({ email: value });

        history.push('/login');
        alert('확인 이메일이 발송되었습니다.');
      } catch (error) {
        console.error(error);
        alert(error);
      }
    } else if (!value || value === '') {
      alert('새 비밀번호를 입력하세요.');
    } else if (value !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      try {
        const result = await passwordResetApi({
          newPassword: value,
          newPasswordConfirm: value,
          token,
        });

        if (result.status !== 200) alert(result.response.data.message);
        else {
          alert('패스워드가 변경되었습니다.');
          history.push('/login');
        }
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  };

  useEffect(() => {
    if (location.pathname.includes('reset')) setMode('reset');
    else if (location.pathname.includes('find')) setMode('find');
    else history.push('/');
  }, []);

  useEffect(() => {
    if (mode === 'reset') {
      const params = new URLSearchParams(location.search);
      if (!params.has('token')) history.push('/');

      setToken(params.get('token'));
      setTextObject({
        subTitle: '비밀번호 변경',
        placeholder: '변경될 비밀번호를 입력해주세요.',
        buttonText: '비밀번호 변경하기',
      });
    } else if (mode === 'find') {
      setTextObject({
        subTitle: '이메일 주소',
        placeholder: '이메일 주소를 입력해주세요.',
        buttonText: '확인',
      });
    }
  }, [mode]);

  return (
    <Wrapper mode={mode}>
      <div className="content">
        <img className="logo" src={witherviewLogo} alt="logo" />
        <div className="sub-title">
          위더뷰와 함께 화상 면접 연습을 진행해보세요.
        </div>
        <div className="box">
          <div className="box-container">
            <A.SubHeader subHeaderText={textObject.subTitle} fontSize="2vh">
              <A.InputBar
                autoFocus={ratio > 0.65}
                value={value}
                placeholder={textObject.placeholder}
                onChange={(e) => setValue(e.target.value)}
                name="email"
                type={mode === 'find' ? 'text' : 'password'}
              />
            </A.SubHeader>
            {mode === 'reset' && (
              <A.SubHeader subHeaderText="비밀번호 확인" fontSize="2vh">
                <A.InputBar
                  autoFocus={ratio > 0.65}
                  value={confirmPassword}
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="email"
                  type="password"
                />
              </A.SubHeader>
            )}
            <div className="button-container">
              <A.Button
                theme="blue"
                func={handleButtonEvent}
                text={textObject.buttonText}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span className="footer-text" onClick={() => history.push('/login')}>
            로그인으로 돌아가기
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

FindPassword.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location,
};
