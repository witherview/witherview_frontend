/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import Timeout from 'await-timeout';
// import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import useSockStomp from '@hooks/useSockStomp';
import useSocketSignal from '@hooks/useSocketSignal';
import StudyBackground from '@assets/images/study_background.png';
// import { setLogout } from '@store/Auth/auth';
// import {
//   startTime,
//   handleReset,
//   handleNextButton,
//   handleStepQuestion,
// } from '@store/Time/time';
// import { setStep, setHistoryId } from '@store/Train/train';
// import { postPreVideoApi } from '@repository/requestVideoRepository';
// import useReactMediaRecorder from '@hooks/useMediaRecorder';

import TextBox from '@components/TextBox';
import Button from '@components/Button';
import Icon from '@components/Icon';

import RemainTime from '@components/RemainTime';
import useWindowSize from '@hooks/useWindowSize';
import MyCamView from './MyCamView';
import PeerVideo from './PeerVideo';

import Fixture from './transitionFixture';
import S from './PeerStudyTrainPage.style';

const STEP_FIRST = 0;
const STEP_CONNECT = 1;
const STEP_TRAIN_FIRST = 2;
const STEP_TRAIN_SECOND = 3;
// const FINAL = 4;

export default function PeerStudyTrainPage({ match }) {
  // TODO: 녹화부분 연동
  // const { status, startRecording, stopRecording } = useReactMediaRecorder({
  //   stream: true,
  // });

  const [step, setStep] = useState(0);
  const { roomId } = match.params;
  const { width } = useWindowSize();
  const { peers, userVideo } = useSocketSignal({
    setStep,
    roomId,
  });
  const { handleClick } = useSockStomp({ roomId });

  useEffect(() => {}, []);

  const textBox = (
    <TextBox topText={Fixture[step].top} bottomText={Fixture[step].bottom} />
  );

  useEffect(() => {
    if (peers.length === 1 && step === 0) {
      setStep(STEP_CONNECT);
    }
    // TODO: peer-study 메인 페이지로 돌아가도록 처리
    if (peers.length === 0 && step > 0) console.log('TODO: ');
  }, [peers, step]);

  const isStepFirst = peers.length === 0 && step === 0;
  const isShowTimer = step === STEP_TRAIN_FIRST || step === STEP_TRAIN_SECOND;

  return (
    <S.Wrapper source={StudyBackground}>
      <S.WrapContainer>
        <S.WrapAbsolute>
          {!isStepFirst && (
            <Icon isCircle type="cancel_circle" func={() => {}} alt="cancel" />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {textBox}
          <S.WrapCamView width={width / 1.5}>
            <MyCamView
              peer={peers[0]}
              mediaBlobUrl={userVideo}
              height={width / 4}
              width={peers.length !== 0 ? width / 3.1 : width / 1.5}
              name={peers.length !== 0 && 'test'}
              absolute={step >= 2}
              peers={peers}
            />
            {peers
              && peers.map((peer, index) => (
                <PeerVideo
                  mediaBlobUrl={peer}
                  key={index}
                  peer={peer}
                  height={width / 4}
                  width={width / 3.1}
                  name={peers.length !== 0 && '최빛'}
                />
              ))}
          </S.WrapCamView>
          <S.WrapBottom width={width / 1.5}>
            <S.WrapBottomSide>
              {isShowTimer && <RemainTime time={40} />}
            </S.WrapBottomSide>
            <Button
              theme={step === STEP_FIRST ? 'gray' : 'blue'}
              text={Fixture[step].button}
              socketRef
              // func={() => socketRef.current.emit('next', step + 1)}
              // TODO: change below line after test
              func={() => handleClick('TEST')}
            />
            <S.WrapBottomSide right />
          </S.WrapBottom>
        </S.WrapContent>
      </S.WrapContainer>
    </S.Wrapper>
  );
}
