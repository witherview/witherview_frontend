/* eslint-disable indent */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setLogout } from '@store/Auth/auth';

import Logo from '@assets/images/witherview_logo.png';
import SidebarButton from './SidebarButton';

const Wrapper = styled.div`
  position: fixed;
  width: 10vh;
  min-width: 10vh;
  max-width: 15.9vh;
  height: 100vh;
  min-height: 20vh;
  border: none;
  background-color: #0c0c59;
  user-select: none;
  z-index: 10;
  transition: all ease 0.1s 0.1s;

  &:hover {
    width: 15.9vh;
    box-shadow: 0.3vh 0 1.1vh 0 rgba(50, 50, 50, 0.56);
    transition: width ease 0.2s 0.5s;
  }
`;

const WrapTopButton = styled.div`
  position: absolute;
  top: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapImage = styled.img`
  height: 6vh;
`;

const WrapButtonContainer = styled.div`
  padding-top: 20vh;
`;

const WrapBottomButton = styled.div`
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  bottom: 8vh;
`;

export default function SideBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [click, setClick] = useState(0);

  const handleClick = (value) => {
    setClick(value);
    history.push(
      value === 0
        ? '/self'
        : value === 1
        ? '/peer-study'
        : value === 2
        ? '/mypage'
        : 'myvideo',
    );
  };

  return (
    <Wrapper>
      <WrapTopButton>
        <WrapImage src={Logo} alt="logo" />
      </WrapTopButton>
      <WrapButtonContainer>
        <SidebarButton
          func={() => handleClick(0)}
          type={click === 0 ? 'bubble_black' : 'bubble_white'}
          clicked={click === 0}
        />
        <SidebarButton
          func={() => handleClick(1)}
          type={click === 1 ? 'sound_black' : 'sound_white'}
          clicked={click === 1}
        />
        <SidebarButton
          func={() => handleClick(4)}
          type={click === 4 ? 'folder_blue' : 'folder_white'}
          clicked={click === 4}
        />
        <SidebarButton
          func={() => handleClick(2)}
          type={click === 2 ? 'profile_black' : 'profile_white'}
          clicked={click === 2}
        />
      </WrapButtonContainer>
      <WrapBottomButton>
        <SidebarButton
          func={() => {
            dispatch(setLogout());
            history.push('/');
          }}
          type={click === 3 ? 'exit_blue' : 'exit_white'}
          clicked={click === 3}
          title="나가기"
        />
      </WrapBottomButton>
    </Wrapper>
  );
}
