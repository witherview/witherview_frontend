/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { get } from '../../utils/snippet';
import { setLogin } from '../../store/Auth/auth';
import LoginApi from '../../repository/loginRepository';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
    LoginApi(JSON.stringify(loginForm)).then((response) => {
      const user = JSON.stringify(response.data.email).replace(/\"/g, '');
      dispatch(setLogin({ user }));
    }).catch(() => {
      alert('로그인 실패');
    });
  };

  return (
    <Wrapper>
      {authSelector.isLogin && <Redirect to="/conference" />}
      <div>
        <h3>아이디</h3>
        <input
          placeholder="아이디(이메일)"
          value={loginForm.id}
          onChange={handleInput}
          name="email"
        />
      </div>
      <div>
        <h3>비밀번호</h3>
        <input
          placeholder="비밀번호"
          value={loginForm.password}
          onChange={handleInput}
          name="password"
          type="password"
        />
      </div>

      <button onClick={handleLogin} type="button">로그인</button>
    </Wrapper>
  );
}
