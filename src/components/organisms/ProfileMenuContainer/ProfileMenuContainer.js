/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
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
  position: ${({ isAbsolute }) => isAbsolute && 'absolute'};
  top: 0;
  right: 0;
  height: ${({ usePx }) => (usePx ? '73px' : '7.3vh')};
  display: flex;
  flex-direction: row;
  align-items: center;

  div.wrap-menu {
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
    ${({ usePx }) =>
      usePx &&
      `
       > div:nth-child(1) {
          width: 45px;
          height: 45px;
        }
        > i {
          margin: 2px;
          background-size: 1237px 876px;
          background-position: -400.5px -45px;
          width: 14px;
          height: 14px;
        }
        > ul {
          top: 40px;
          right: -20px;
        }
    `};
  }

  div.name {
    font-family: AppleSDGothicNeoEB00;
    font-size: ${({ usePx }) => (usePx ? '15px' : '1.5vh')};
    padding-left: ${({ isSmall, usePx }) =>
      isSmall ? (usePx ? '15px' : '1.5vh') : usePx ? '29px' : '2.9vh'};
    padding-right: ${({ usePx }) => (usePx ? '10px' : '1vh')};
    user-select: none;
    color: ${({
      theme: {
        common: { profileNameColor },
      },
    }) => profileNameColor};
  }

  ul.list {
    width: ${({ usePx }) => (usePx ? '143px' : '14.3vh')};
    padding: ${({ usePx }) => (usePx ? '18.5px 0px' : '1.85vh 0vh')};
    position: absolute;
    top: ${({ usePx }) => (usePx ? '70px' : '7vh')};
    right: 0;
    z-index: 101;
    background-color: #fff;
    transition: 0.25s ease all;
    transform: scale(0);
    transform-origin: 0 1;
    border-radius: ${({ usePx }) => (usePx ? '10px' : '1vh')};
    box-shadow: ${({ usePx }) =>
      `${usePx ? '0 12px 24px 0' : '0 1.2vh 2.4vh 0'} rgba(4, 4, 161, 0.15)`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transform: ${({ isOpen }) => isOpen && 'scale(1)'};
  }

  li.item {
    width: auto;
    padding-top: ${({ usePx }) => (usePx ? '12.5px' : '1.25vh')};
    padding-bottom: ${({ usePx }) => (usePx ? '12.5px' : '1.25vh')};
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div.each {
    user-select: none;
    font-family: AppleSDGothicNeoM00;
    font-size: ${({ usePx }) => (usePx ? '15px' : '1.5vh')};
    color: #9e9e9e;
    &:hover {
      color: #f2886b;
      text-decoration: none;
    }
    cursor: pointer;
  }
`;

export default function ProfileMenuContainer({
  name,
  src,
  isSmall = false,
  isAbsolute = true,
  usePx = false,
}) {
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
    <Wrapper
      isAbsolute={isAbsolute}
      isOpen={isOpen}
      isSmall={isSmall}
      usePx={usePx}
    >
      <div
        className="wrap-menu"
        onMouseOver={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
      >
        <A.ProfileIcon src={src} isSmall={isSmall} isPx={usePx} />
        <div className="name">{name || 'Unknown'}</div>

        <A.Icon type="arrow_down_grey" alt="arrow_down_grey" />
        <ul className="list">
          <li className="item">
            <div className="each" onClick={() => history.push('/mypage')}>
              마이페이지
            </div>
          </li>
          <li className="item">
            <div className="each" onClick={onViewModeToggle}>
              {viewModeSwitch}
            </div>
          </li>
          <li className="item">
            <div
              className="each"
              onClick={() => {
                dispatch(setLogout());
                history.push('/');
              }}
            >
              로그아웃
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

ProfileMenuContainer.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  isSmall: PropTypes.bool,
  isAbsolute: PropTypes.bool,
  usePx: PropTypes.bool,
};

ProfileMenuContainer.defaultProps = {
  name: '홍길동',
  isSmall: false,
  usePx: false,
};
