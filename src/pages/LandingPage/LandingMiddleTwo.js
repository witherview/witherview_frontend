import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import AloneImage from '@assets/images/middle_first.png';
import TextBoxA from './components/TextBoxA';

const Wrapper = styled.div`
  @media only screen and (max-width: 1870px) {
    min-height: 400px;
  }
  width: 100%;
  user-select: none;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  @media only screen and (max-width: 1870px) {
    min-height: 350px;
  }
  min-height: 475px;
  width: 80%;
  max-width: 1100px;
  min-width: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapPadding = styled.div`
  @media only screen and (max-width: 1870px) {
    padding-top: 0;
  }
  padding-top: 100px;
`;

const WrapImage = styled.img`
  @media only screen and (max-width: 1870px) {
    height: 350px;
    bottom: 0;
  }
  @media only screen and (max-width: 1150px) {
    display: none;
  }

  height: 550px;
  position: absolute;
  bottom: -100px;
  left: -100px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function LandingMiddleTwo({ myRefAlone }) {
  return (
    <Wrapper ref={myRefAlone}>
      <Div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <WrapContainer>
          <WrapImage src={AloneImage} />
          <div />
          <WrapPadding>
            <TextBoxA
              isRight
              height={250}
              header="PRACTICE ALONE"
              content={['혼자서도 쉽게', '화상 면접 진행을!']}
              summary={[
                '면접 질문 작성, 면접 스크립트, 자가평가로 이루어지는',
                '완벽한 면접 연습! 질문리스트 작성을 통해 기업, 직무별',
                '면접 리스트를 편리하게 경험해 보세요.',
              ]}
            />
          </WrapPadding>
        </WrapContainer>
      </Div>
    </Wrapper>
  );
}

LandingMiddleTwo.propTypes = {
  myRefAlone: PropTypes.object.isRequired,
};
