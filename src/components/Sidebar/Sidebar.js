/* eslint-disable indent */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setLogout } from '@store/Auth/auth';

import LogoWithTitle from '@assets/images/witherview_logo_title.png';
import Logo from '@assets/images/witherview_logo.png';
import SidebarButton from './SidebarButton';

const Wrapper = styled.div`
  position: fixed;
  width: ${({ hover }) => (hover ? 296 : 159)}px;
  min-width: 159px;
  max-width: 296px;
  height: 100vh;
  min-height: 200px;
  border: none;
  background-color: #0c0c59;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  z-index: 10;
`;

const WrapTopButton = styled.div`
  position: absolute;
  top: 72px;
  width: ${({ hover }) => (hover ? 296 : 159)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapImage = styled.img`
  height: ${({ hover }) => (hover ? 30 : 50)}px;
  padding: ${({ hover }) => (hover ? 10 : 0)}px;
`;

const WrapButtonContainer = styled.div`
  @media only screen and (max-height: 613px) {
    display: none;
  }
  padding-top: 200px;
`;

const WrapBottomButton = styled.div`
  @media only screen and (max-height: 400px) {
    display: none;
  }
  width: ${({ hover }) => (hover ? 296 : 159)}px;

  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  bottom: 97.9px;
`;

export default function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(false);

  const handleClick = (value) => {
    setClick(value);
    history.push(value === 0 ? '/questionlist'
               : value === 1 ? '/group-study' : '/mypage');
  };

  function hoverActive() {
    setHover(true);
  }
  function hoverDeactive() {
    setHover(false);
  }

  return (
    <Wrapper
      onMouseEnter={hoverActive}
      onMouseLeave={hoverDeactive}
      hover={hover}
    >
      <WrapTopButton hover={hover}>
        <WrapImage
          src={hover ? LogoWithTitle : Logo}
          hover={hover}
          alt="logo"
        />
      </WrapTopButton>
      <WrapButtonContainer>
        <SidebarButton
          func={() => handleClick(0)}
          type={click === 0 ? 'bubble_black' : 'bubble_white'}
          clicked={click === 0}
          hover={hover}
          title="혼자연습"
        />
        <SidebarButton
          func={() => handleClick(1)}
          type={click === 1 ? 'sound_black' : 'sound_white'}
          clicked={click === 1}
          hover={hover}
          title="면접스터디"
        />
        <SidebarButton
          func={() => handleClick(2)}
          type={click === 2 ? 'profile_black' : 'profile_white'}
          clicked={click === 2}
          hover={hover}
          title="마이페이지"
        />
      </WrapButtonContainer>
      <WrapBottomButton hover={hover}>
        <SidebarButton
          func={() => dispatch(setLogout())}
          type={click === 3 ? 'exit_blue' : 'exit_white'}
          clicked={click === 3}
          hover={hover}
          title="나가기"
        />
      </WrapBottomButton>
    </Wrapper>
  );
}
