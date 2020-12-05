import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import StudyImageOne from '@assets/images/middle_craousal_one.png';
import StudyImageTwo from '@assets/images/middle_craousal_two.png';
import StudyImageThree from '@assets/images/middle_craousal_three.png';
import StaticImage from '@assets/images/middle_end_background.png';
import TextBoxA from './components/TextBoxA';
import CircleButton from './components/CircleButton';

const Wrapper = styled.div`
  @media only screen and (max-width: 1500px) {
    min-height: 600px;
  }
  width: 100%;
  user-select: none;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  @media only screen and (max-width: 1500px) {
    min-height: 600px;
    justify-content: center;
  }
  position: relative;
  min-height: 1000px;
  max-width: 1600px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapImage = styled.img`
  @media only screen and (max-width: 1920px) {
    display: none;
    position: relative;
    bottom: auto;
    height: 0px;
  }
  position: absolute;
  right: 115px;
  height: 680px;
  bottom: 170px;
`;

const WrapPadding = styled.div`
  @media only screen and (max-width: 1500px) {
    padding-top: 0px;
  }
  padding-bottom: 100px;
`;

const WrapStaticImage = styled.img`
  @media only screen and (max-width: 1920px) {
    display: none;
    position: relative;
    bottom: auto;
    height: 0px;
  }
  z-index: -1;

  height: 700px;
  position: absolute;
  top: 50px;
  right: 0px;
`;
const WrapCarousel = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80px;
  bottom: 200px;
  right: calc(50% - 40px);
`;

const FIRST_STEP = 0;
const SECOND_STEP = 1;
const THIRD_STEP = 2;

const FIRST_TEXT = {
  header: 'PRACTICE WITH OTHERS',
  content: ['다른 사람들과 함께', '진행하는 면접 스터디'],
  summary: [
    '나와 비슷한 산업, 직군을 가진 사람들과 함께',
    '이제 방 안에서도 쉽게 연습할 수 있습니다.',
  ],
};
const SECOND_TEXT = {
  header: 'PRACTICE WITH OTHERS',
  content: ['현장감 있는', '1:1 면접 진행'],
  summary: [
    '실제 면접을 보는 듯한 긴장감, 실시간 평가',
    '최종 합격까지 자신의 면접을 평가받을 수 있습니다.',
  ],
};
const THIRD_TEXT = {
  header: 'PRACTICE WITH OTHERS',
  content: ['원하는 대로 진행', '가능한 면접 스터디'],
  summary: [
    '원하는 시간, 요일에 맞춰 면접 스터디',
    '스케쥴을 등록할 수 있습니다.',
  ],
};

export default function LandingMiddleThree({ myRefStudy }) {
  const intervalId = useRef(null);
  const [state, setState] = useState(FIRST_STEP);

  const handleClick = (val) => setState(val);

  const handleImage = (val) => {
    if (val === SECOND_STEP) return StudyImageTwo;
    if (val === THIRD_STEP) return StudyImageThree;
    return StudyImageOne;
  };

  const handleText = (val) => {
    if (val === SECOND_STEP) return SECOND_TEXT;
    if (val === THIRD_STEP) return THIRD_TEXT;
    return FIRST_TEXT;
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setState((stat) => (stat + 1) % 3);
    }, 6000);
    return clearInterval(intervalId);
  }, []);

  return (
    <Wrapper ref={myRefStudy}>
      <WrapContainer>
        <WrapPadding>
          <TextBoxA
            height={350}
            header={handleText(state).header}
            content={handleText(state).content}
            summary={handleText(state).summary}
          />
        </WrapPadding>
        <WrapImage src={handleImage(state)} />
        <WrapStaticImage src={StaticImage} />
        <WrapCarousel>
          <CircleButton
            clicked={state === FIRST_STEP}
            func={() => handleClick(FIRST_STEP)}
          />
          <CircleButton
            clicked={state === SECOND_STEP}
            func={() => handleClick(SECOND_STEP)}
          />
          <CircleButton
            clicked={state === THIRD_STEP}
            func={() => handleClick(THIRD_STEP)}
          />
        </WrapCarousel>
      </WrapContainer>
    </Wrapper>
  );
}

LandingMiddleThree.propTypes = {
  myRefStudy: PropTypes.object.isRequired,
};
