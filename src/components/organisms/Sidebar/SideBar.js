/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setLogout } from '@store/Auth/auth';

import Logo from '@assets/images/witherview_logo.png';
import SidebarButton from './SidebarButton';

const Wrapper = styled.div`
  position: fixed;
  width: 10vh;
  min-width: 10vh;
  height: 100vh;
  min-height: 20vh;
  border: none;
  background-color: #0c0c59;
  user-select: none;
  z-index: 10;
  transition: all ease 0.1s 0.1s;

  &:hover {
    width: 21vh;
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
  const { pathname } = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();

  const [path, setPath] = useState('self');
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const pathName = pathname.split('/')[1];
    if (
      pathName === 'self' ||
      pathName === 'peer-study' ||
      pathName === 'replay' ||
      pathName === 'mypage'
    ) {
      setPath(pathName);
    } else {
      history.push('/self');
    }
  }, []);

  const handleClick = (value) => {
    setPath(value);
    history.push(`/${value}`);
  };

  return (
    <Wrapper
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <WrapTopButton>
        <WrapImage src={Logo} alt="logo" />
      </WrapTopButton>
      <WrapButtonContainer>
        <SidebarButton
          func={() => handleClick('self')}
          type={path === 'self' ? 'bubble_black' : 'bubble_white'}
          clicked={path === 'self'}
          isHover={isHover}
          text="혼자연습"
        />
        <SidebarButton
          func={() => handleClick('peer-study')}
          type={path === 'peer-study' ? 'sound_black' : 'sound_white'}
          clicked={path === 'peer-study'}
          isHover={isHover}
          text="면접스터디"
        />
        <SidebarButton
          func={() => handleClick('replay')}
          type={path === 'replay' ? 'folder_blue' : 'folder_white'}
          clicked={path === 'replay'}
          isHover={isHover}
          text="저장확인"
        />
        <SidebarButton
          func={() => handleClick('mypage')}
          type={path === 'mypage' ? 'profile_black' : 'profile_white'}
          clicked={path === 'mypage'}
          isHover={isHover}
          text="마이페이지"
        />
      </WrapButtonContainer>
      <WrapBottomButton>
        <SidebarButton
          func={() => {
            dispatch(setLogout());
            history.push('/');
          }}
          type="exit_white"
          text="나가기"
        />
      </WrapBottomButton>
    </Wrapper>
  );
}
