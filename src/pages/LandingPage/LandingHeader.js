import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import A from '@atoms';
import O from '@organisms';
import Logo from '@assets/images/witherview_logo_title_dark.png';
import TextButtonProps from './components/TextButtonProps';

const Wrapper = styled.div`
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
  background-color: white;

  img.wrap-left {
    width: 120px;
  }
  div.wrap-container {
    width: 90%;
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
  const executeScroll = (ref) => scrollToRef(ref);
  const isLoggedIn = sessionStorage.getItem('isLogin') !== null;
  const name = sessionStorage.getItem('name');
  return (
    <Wrapper>
      <div className="wrap-container">
        <img className="wrap-left" src={Logo} alt="witherview" />
        <div className="wrap-right-inner">
          <div className="wrap-text-button">
            <TextButtonProps onClick={() => executeScroll(topRef)} text="홈" />
            <TextButtonProps
              onClick={() => executeScroll(middleOneRef)}
              text="위더뷰란?"
            />
            <TextButtonProps
              onClick={() => executeScroll(aloneRef)}
              text="혼자연습"
            />
            <TextButtonProps
              onClick={() => executeScroll(studyRef)}
              text="면접스터디"
            />
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
