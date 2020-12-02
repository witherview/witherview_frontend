import React, { useState } from 'react';

import styled from 'styled-components';

import LogoWithTitle from '@assets/images/witherview_logo_title.png';
import Logo from '@assets/images/witherview_logo.png';
import SidebarButton from './SidebarButton';

const Wrapper = styled.div`
  width: 159px;
  min-width: 159px;
  max-width: 159px;
  height: 100vh;
  min-height: 200px;
  border: none;
  background-color: #0c0c59;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const WrapTopButton = styled.div`
  position: absolute;
  top: 72px;
  width: 159px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapImage = styled.img`
  height: 50px;
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
  position: absolute;
  bottom: 97.9px;
  width: 159px;
`;

export default function Sidebar() {
  const [click, setClick] = useState(0);

  const handleClick = (value) => {
    setClick(value);
  };

  return (
    <Wrapper>
      <WrapTopButton>
        <WrapImage src={Logo} alt="logo" />
      </WrapTopButton>
      <WrapButtonContainer>
        <SidebarButton handleClick={() => handleClick(0)} type={click === 0 ? 'bubble_black' : 'bubble_white'} clicked={click === 0} />
        <SidebarButton handleClick={() => handleClick(1)} type={click === 1 ? 'sound_black' : 'sound_white'} clicked={click === 1} />
        <SidebarButton handleClick={() => handleClick(2)} type={click === 2 ? 'profile_black' : 'profile_white'} clicked={click === 2} />
      </WrapButtonContainer>
      <WrapBottomButton>
        <SidebarButton handleClick={() => handleClick(3)} type={click === 3 ? 'exit_blue' : 'exit_white'} clicked={click === 3} />
      </WrapBottomButton>
    </Wrapper>
  );
}
