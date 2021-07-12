/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLogout } from '@store/Auth/auth';

import A from '@atoms';

const Wrapper = styled.div`
  position: ${({ isAbsolute }) => isAbsolute && 'absolute'};
  top: 0;
  right: 0;
  height: 7.3vh;
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
  }

  div.name {
    font-family: AppleSDGothicNeoEB00;
    font-size: 1.5vh;
    padding-left: ${({ isSmall }) => (isSmall ? '1.5vh' : '2.9vh')};
    padding-right: 1vh;
    user-select: none;
    color: #3d3d3d;
  }

  ul.list {
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
  }

  li.item {
    width: 8.7vh;
    padding-top: 1.25vh;
    padding-bottom: 1.25vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div.each {
    user-select: none;
    font-family: AppleSDGothicNeoM00;
    font-size: 1.5vh;
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
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (set) => setIsOpen(set);

  return (
    <Wrapper isAbsolute={isAbsolute} isOpen={isOpen} isSmall={isSmall}>
      <div
        className="wrap-menu"
        onMouseOver={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
      >
        <A.ProfileIcon src={src} isSmall={isSmall} />
        <div className="name">{name || 'Unknown'}</div>

        <A.Icon type="arrow_down_grey" alt="arrow_down_grey" />
        <ul className="list">
          <li className="item">
            <div className="each" onClick={() => history.push('/mypage')}>
              마이페이지
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
};

ProfileMenuContainer.defaultProps = {
  name: '홍길동',
  isSmall: false,
  isAbsolute: true,
};
