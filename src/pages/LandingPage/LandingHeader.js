import React, { useState } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import A from '@atoms';
import { useSelector } from 'react-redux';
import { get } from '@utils/snippet';
import O from '@organisms';
import TextButtonProps from './components/TextButtonProps';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  -moz-box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);

  h1.wrap-left {
    width: 120px;
    height: 100%;
    background: url(${({ theme: { mainLogo } }) => mainLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-indent: -9999px;
  }
  div.wrap-container {
    width: 90%;
    height: 100%;
    max-width: 1150px;
    min-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.wrap-text-button {
    @media only screen and (max-width: 1150px) {
      display: none;
    }
    min-width: 521px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 110px;
    color: ${({ theme: { landingFooterWrapLeftInnerColor } }) =>
      landingFooterWrapLeftInnerColor};
  }

  div.wrap-right-inner {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  div.wrap-profile {
    width: 143px; //button width 140px + border width 1.5px * 2
  }

  div.wrap-button {
    > div {
      border-width: 1.5px;
      > p {
        font-size: 20px;
        font-family: AppleSDGothicNeoEB00;
      }
    }
  }
`;

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 60,
    left: 0,
    behavior: 'smooth',
  });

export default function LandingHeader({
  topRef,
  middleOneRef,
  aloneRef,
  studyRef,
}) {
  const history = useHistory();
  const { viewMode } = useSelector(get('viewMode'));
  const [activeMenu, setActiveMenu] = useState(0);
  const executeScroll = (ref) => scrollToRef(ref);
  const isLoggedIn = sessionStorage.getItem('isLogin') !== null;
  const name = sessionStorage.getItem('name');
  const textButtonPropsList = [
    {
      id: 0,
      text: '홈',
      scrollFuncRef: topRef,
    },
    {
      id: 1,
      text: '위더뷰란?',
      scrollFuncRef: middleOneRef,
    },
    {
      id: 2,
      text: '혼자연습',
      scrollFuncRef: aloneRef,
    },
    {
      id: 3,
      text: '면접스터디',
      scrollFuncRef: studyRef,
    },
  ];

  const btnRender = () => {
    const currentBtnTheme =
      viewMode === 'dark' ? 'loginBtnDarkMode' : 'outline';

    return (
      <A.Button
        id="menu_btn"
        btnTheme={currentBtnTheme}
        width={140}
        text="LOG IN"
        func={() => history.push('/login')}
      />
    );
  };

  return (
    <Wrapper>
      <div className="wrap-container">
        <h1 className="wrap-left">메인로고</h1>
        <div className="wrap-right-inner">
          <div className="wrap-text-button">
            {textButtonPropsList.map(({ id, text, scrollFuncRef }) => (
              <TextButtonProps
                key={id}
                onClick={() => {
                  executeScroll(scrollFuncRef);
                  setActiveMenu(id);
                }}
                text={text}
                isClicked={activeMenu === id}
              />
            ))}
          </div>
          {isLoggedIn ? (
            <div className="wrap-profile">
              <O.ProfileMenuContainer
                name={name}
                isSmall
                isAbsolute={false}
                usePx
              />
            </div>
          ) : (
            <div className="wrap-button">
              <A.Button
                id="menu_btn"
                theme="outline"
                width={230}
                text="LOG IN"
                func={() => history.push('/login')}
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

LandingHeader.propTypes = {
  topRef: PropTypes.object.isRequired,
  middleOneRef: PropTypes.object.isRequired,
  aloneRef: PropTypes.object.isRequired,
  studyRef: PropTypes.object.isRequired,
};
