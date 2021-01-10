import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import C from '@components';
import Logo from '@assets/images/witherview_logo_title_dark.png';

const Wrapper = styled.div`
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
  background-color: white;
`;

const WrapLeft = styled.img`
  width: 120px;
`;

const WrapContainer = styled.div`
  width: 90%;
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
        <WrapLeft src={Logo} />
        <WrapRightInner>
          <WrapTextButton>
            <C.TextButtonProps
              onClick={() => executeScroll(topRef)}
              text="홈"
            />
            <C.TextButtonProps
              onClick={() => executeScroll(middleOneRef)}
              text="위더뷰란?"
            />
            <C.TextButtonProps
              onClick={() => executeScroll(aloneRef)}
              text="혼자연습"
            />
            <C.TextButtonProps
              onClick={() => executeScroll(studyRef)}
              text="면접스터디"
            />
          </WrapTextButton>
          <WrapButton>
            <C.Button
              id="menu_btn"
              theme="outline"
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
