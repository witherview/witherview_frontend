import React, { useState } from 'react';

import styled from 'styled-components';

import SidebarButton from './SidebarButton';

import Logo from '../../assets/images/witherview_logo.png';
import LogoWithTitle from '../../assets/images/witherview_logo_title.png';

const Wrapper = styled.div`
  width: ${({ hover }) => (hover ? 296 : 159)}px;
  min-width: 159px;
  max-width: 296px;
  height: 100vh;
  min-height: 200px;
  border: none;
  background-color: #0c0c59;
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
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
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(false);

  const handleClick = (value) => {
    setClick(value);
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
          handleClick={() => handleClick(0)}
          type={click === 0 ? 'bubble_black' : 'bubble_white'}
          clicked={click === 0}
          hover={hover}
          title="혼자연습"
        />
        <SidebarButton
          handleClick={() => handleClick(1)}
          type={click === 1 ? 'sound_black' : 'sound_white'}
          clicked={click === 1}
          hover={hover}
          title="면접스터디"
        />
        <SidebarButton
          handleClick={() => handleClick(2)}
          type={click === 2 ? 'profile_black' : 'profile_white'}
          clicked={click === 2}
          hover={hover}
          title="마이페이지"
        />
      </WrapButtonContainer>
      <WrapBottomButton hover={hover}>
        <SidebarButton
          handleClick={() => handleClick(3)}
          type={click === 3 ? 'exit_blue' : 'exit_white'}
          clicked={click === 3}
          hover={hover}
          title="나가기"
        />
      </WrapBottomButton>
    </Wrapper>
  );
}
