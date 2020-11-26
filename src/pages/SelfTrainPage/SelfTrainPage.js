import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Sidebar from '../../components/Sidebar';
import ProfileMenuContainer from '../../components/ProfileMenuContainer';
import CamView from '../../components/CamView';

import TextBox from './TextBox';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

import useWindowSize from '../../hooks/useWindowSize';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const WrapContainer = styled.div`
  height: ${({ height }) => height}px;
  width: 100%;
`;

const WrapTop = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }

  position: absolute;
  top: 53px;
  right: 105px;
`;

const WrapMiddle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapCamView = styled.div`
  padding: 40px;
`;

const STEP_FIRST = 0;
const STEP_LOADING_1 = 1;
const STEP_LOADING_2 = 2;
const STEP_START = 3;
const STEP_ING = 4;

const name = '홍길동';
const company = '카카오 서비스 기획';
const Fixture = [
  {
    top: '기본 질문을 시작하겠습니다.',
    bottom: '먼저 마이크와 카메라를 준비해주세요.',
    button: '시작하기',
  },
  {
    top: '실제 면접을 본다고 생각하고 상황을 상상해보세요',
    bottom: '똑바로 앉으시고, 카메라나 화면을 응시해 주세요.',
  },
  {
    top: '면접 장소에 도착했습니다.',
    bottom: '똑바로 앉으시고, 카메라나 화면을 응시해 주세요.',
  },
  {
    top: '3분 뒤 면접을 시작하겠습니다.',
    bottom: '3분 동안 예상 면접 질문에 대해 답변을 생각해 보세요.',
    button: '바로 시작하기',
  },
];

export default function SelfTrainPage() {
  const { height, width } = useWindowSize();
  const [step, useStep] = useState(STEP_FIRST);

  const [timer, useTimer] = useState(null);

  const handleNext = () => {
    if (step === STEP_FIRST) {
      useStep(STEP_LOADING_1);
    }
    if (step === STEP_START) {
      useStep(STEP_ING);
    }
  };

  const handleCancel = () => {
    clearTimeout(timer);
    useStep(STEP_FIRST);
    useTimer(null);
  };

  useEffect(() => {
    if (step === STEP_LOADING_1 || step === STEP_LOADING_2) {
      const setTimer = setTimeout(() => {
        useStep(step + STEP_LOADING_1);
      }, 3000);
      useTimer(setTimer);
    }
  }, [step]);

  return (
    <Wrapper>
      {step === STEP_FIRST ? <Sidebar /> : <></>}
      <WrapContainer height={height}>
        <WrapTop>
          {step === STEP_FIRST ? (
            <ProfileMenuContainer />
          ) : (
            <Icon type="cancel_circle" func={handleCancel} alt="cancel" />
          )}
        </WrapTop>
        <WrapMiddle>
          <TextBox
            topText={
              (step === STEP_LOADING_2 ? `${name}님은 ${company} ` : '')
              + Fixture[step].top
            }
            bottomText={Fixture[step].bottom}
          />
          <WrapCamView>
            <CamView height={width / 3} width={width / 1.5} />
          </WrapCamView>
          {Fixture[step].button ? (
            <Button
              theme="blue"
              text={Fixture[step].button}
              func={handleNext}
            />
          ) : (
            <></>
          )}
        </WrapMiddle>
      </WrapContainer>
    </Wrapper>
  );
}
