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
  width: ${({ hover }) => (hover ? 29.6 : 15.9)}vh;
  min-width: 15.9vh;
  max-width: 29.6vh;
  height: 100vh;
  min-height: 20vh;
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
  top: 7.2vh;
  width: ${({ hover }) => (hover ? 29.6 : 15.9)}vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapImage = styled.img`
  height: ${({ hover }) => (hover ? 3 : 5)}vh;
  padding: ${({ hover }) => (hover ? 1 : 0)}vh;
`;

const WrapButtonContainer = styled.div`
  padding-top: 20vh;
`;

const WrapBottomButton = styled.div`
  width: ${({ hover }) => (hover ? 29.6 : 15.9)}vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  bottom: 9.79vh;
`;

export default function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(false);

  const handleClick = (value) => {
    setClick(value);
    history.push(
      value === 0
        ? '/self'
        : value === 1
        ? '/group-study'
        : value === 2
        ? '/mypage'
        : 'myvideo',
    );
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
        {/* <SidebarButton
          func={() => handleClick(1)}
          type={click === 1 ? 'sound_black' : 'sound_white'}
          clicked={click === 1}
          hover={hover}
          title="면접스터디"
        />
        <SidebarButton
          func={() => handleClick(4)}
          type={click === 4 ? 'folder_blue' : 'folder_white'}
          clicked={click === 4}
          hover={hover}
          title="저장확인"
        /> */}
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
          func={() => {
            dispatch(setLogout());
            history.push('/');
          }}
          type={click === 3 ? 'exit_blue' : 'exit_white'}
          clicked={click === 3}
          hover={hover}
          title="나가기"
        />
      </WrapBottomButton>
    </Wrapper>
  );
}
