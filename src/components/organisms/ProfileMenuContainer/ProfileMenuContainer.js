import React, { useCallback, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '@store/Auth/auth';

import A from '@atoms';
import { toggleViewMode } from '@store/ViewMode/viewMode';
import { get } from '@utils/snippet';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 7.3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

const WrapMenu = styled.div`
  list-style-type: none;
  position: relative;
  text-align: center;
  z-index: 101;
  ${({ isOpen }) =>
    isOpen &&
    `
    fill: #0b3895;
    transform: scale(1);
  `}
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 1.5vh;
  padding-left: 2.9vh;
  padding-right: 1vh;
  user-select: none;
  color: ${({ theme: { profileNameColor } }) => profileNameColor};
`;

const List = styled.ul`
  width: 14.3vh;
  padding: 1.85vh 0vh 1.85vh 0vh;
  position: absolute;
  top: 7vh;
  right: 0;
  z-index: 101;
  background-color: #fff;
  transition: 0.25s ease all;
  transform: scale(0);
  transform-origin: 0 1;
  border-radius: 1vh;
  box-shadow: 0 1.2vh 2.4vh 0 rgba(4, 4, 161, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: ${({ isOpen }) => isOpen && 'scale(1)'};
`;

const Item = styled.li`
  width: 8.7vh;
  padding-top: 1.25vh;
  padding-bottom: 1.25vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Each = styled.div`
  user-select: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  color: #9e9e9e;
  &:hover {
    color: #f2886b;
    text-decoration: none;
  }
  cursor: pointer;
`;

export default function ProfileMenuContainer({ name, src }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { viewMode } = useSelector(get('viewMode'));

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (set) => setIsOpen(set);

  const onViewModeToggle = useCallback(() => {
    if (viewMode === 'dark') {
      // 라이트모드 활성화
      localStorage.setItem('viewMode', 'light');
      dispatch(toggleViewMode({ viewMode: 'light' }));
    } else {
      // 다크모드 활성화
      localStorage.setItem('viewMode', 'dark');
      dispatch(toggleViewMode({ viewMode: 'dark' }));
    }
  }, [viewMode]);

  const viewModeSwitch = useMemo(() => viewMode === 'dark', [viewMode])
    ? 'Light: ON'
    : 'Dark: ON';

  return (
    <Wrapper>
      <WrapMenu
        isOpen={isOpen}
        onMouseOver={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
      >
        <A.ProfileIcon src={src} />
        <Name>{name || 'Unknown'}</Name>

        <A.Icon type="arrow_down_grey" alt="arrow_down_grey" />
        <List isOpen={isOpen}>
          <Item>
            <Each onClick={() => history.push('/mypage')}>마이페이지</Each>
          </Item>
          {/* 라이트/다크모드 메뉴 */}
          <Item>
            <Each onClick={onViewModeToggle}>{viewModeSwitch}</Each>
          </Item>
          <Item>
            <Each
              onClick={() => {
                dispatch(setLogout());
                history.push('/');
              }}
            >
              로그아웃
            </Each>
          </Item>
        </List>
      </WrapMenu>
    </Wrapper>
  );
}

ProfileMenuContainer.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

ProfileMenuContainer.defaultProps = {
  name: '홍길동',
};
