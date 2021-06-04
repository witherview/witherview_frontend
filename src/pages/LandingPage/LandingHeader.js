import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import A from '@atoms';
import TextButtonProps from './components/TextButtonProps';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  -moz-box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
`;

const MainLogo = styled.h1`
  width: 120px;
  height: 100%;
  background: url(${({ theme: { mainLogo } }) => mainLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
`;

const WrapContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1150px;
  min-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapTextButton = styled.div`
  @media only screen and (max-width: 1150px) {
    display: none;
  }
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 60px;
`;

const WrapRightInner = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const WrapButton = styled.div`
  > div {
    height: 35px;
    border-radius: 5px;
    border-width: 1.5px;
    > p {
      font-size: 12px;
      font-family: AppleSDGothicNeoEB00;
    }
  }
`;

const scrollToRef = (ref) => window.scrollTo({
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

  return (
    <Wrapper>
      <WrapContainer>
        <MainLogo>메인로고</MainLogo>
        <WrapRightInner>
          <WrapTextButton>
            <TextButtonProps
              onClick={() => executeScroll(topRef)}
              text="홈"
            />
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
          </WrapTextButton>
          <WrapButton>
            <A.Button
              id="menu_btn"
              btnTheme="outline"
              width={140}
              text="LOG IN"
              func={() => history.push('/login')}
            />
          </WrapButton>
        </WrapRightInner>
      </WrapContainer>
    </Wrapper>
  );
}

LandingHeader.propTypes = {
  topRef: PropTypes.object.isRequired,
  middleOneRef: PropTypes.object.isRequired,
  aloneRef: PropTypes.object.isRequired,
  studyRef: PropTypes.object.isRequired,
};
