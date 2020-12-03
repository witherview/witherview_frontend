import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import AloneImage from '@assets/images/middle_first.png';
import TextBoxA from './components/TextBoxA';

const Wrapper = styled.div`
<<<<<<< HEAD
  @media only screen and (max-width: 1820px) {
=======
  @media only screen and (max-width: 1870px) {
>>>>>>> 9edf3b6fd3aa72bc0c0371c44cc9378eaa0bb966
    min-height: 400px;
  }
  width: 100%;
  user-select: none;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9ff;
`;

const WrapContainer = styled.div`
<<<<<<< HEAD
  @media only screen and (max-width: 1820px) {
=======
  @media only screen and (max-width: 1870px) {
    width: 80%;
>>>>>>> 9edf3b6fd3aa72bc0c0371c44cc9378eaa0bb966
    min-height: 400px;
    justify-content: flex-end;
  }
  position: relative;
  min-height: 600px;
  max-width: 1600px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const WrapPadding = styled.div`
<<<<<<< HEAD
  @media only screen and (max-width: 1820px) {
=======
  @media only screen and (max-width: 1870px) {
>>>>>>> 9edf3b6fd3aa72bc0c0371c44cc9378eaa0bb966
    padding-top: 0px;
  }
  padding-top: 100px;
`;

const WrapImage = styled.img`
<<<<<<< HEAD
  @media only screen and (max-width: 1820px) {
=======
  @media only screen and (max-width: 1870px) {
    height: 550px;
    bottom: -90px;
  }

  @media only screen and (max-width: 1280px) {
>>>>>>> 9edf3b6fd3aa72bc0c0371c44cc9378eaa0bb966
    display: none;
    position: relative;
    bottom: auto;
    height: 0px;
  }

  height: 750px;
  position: absolute;
  bottom: -150px;
  left: -135px;
`;

export default function LandingMiddleTwo({ myRefAlone }) {
  return (
    <Wrapper ref={myRefAlone}>
      <WrapContainer>
        <WrapImage src={AloneImage} />
        <div />
        <WrapPadding>
          <TextBoxA
            isRight
            height={350}
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
    </Wrapper>
  );
}

LandingMiddleTwo.propTypes = {
  myRefAlone: PropTypes.object.isRequired,
};
