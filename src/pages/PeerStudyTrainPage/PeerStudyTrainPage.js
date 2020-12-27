/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

// import Timeout from 'await-timeout';
// import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useSockStomp from '@hooks/useSockStomp';
import useSocketSignal from '@hooks/useSocketSignal';
import StudyBackground from '@assets/images/study_background.png';
// import { setLogout } from '@store/Auth/auth';
import {
  startTime,
  // handleReset,
  // handleNextButton,
  // handleStepQuestion,
} from '@store/Time/time';
import { setToggleTrain } from '@store/Train/train';
import { get } from '@utils/snippet';
// import { setStep, setHistoryId } from '@store/Train/train';
// import { postPreVideoApi } from '@repository/requestVideoRepository';
// import useReactMediaRecorder from '@hooks/useMediaRecorder';

import InterviewChat from '@components/InterviewChat';

import TextBox from '@components/TextBox';
import Button from '@components/Button';
import Icon from '@components/Icon';

import RemainTime from '@components/RemainTime';
import useWindowSize from '@hooks/useWindowSize';

import Modal from '@components/Modal/Modal';
import { showModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';

import MyCamView from './MyCamView';
import PeerVideo from './PeerVideo';

import Fixture from './transitionFixture';
import S from './PeerStudyTrainPage.style';

const STEP_FIRST = 0;
const STEP_CONNECT = 1;
const STEP_TRAIN_FIRST = 2;
const STEP_TRAIN_SECOND = 3;
const STEP_FINAL = 4;

export default function PeerStudyTrainPage({ match, history }) {
  // TODO: 녹화부분 연동
  // const { status, startRecording, stopRecording } = useReactMediaRecorder({
  //   stream: true,
  // });

  const dispatch = useDispatch();

  const { time } = useSelector(get('time'));
  const [step, setStep] = useState(0);
  const { roomId } = match.params;
  const { width } = useWindowSize();
  const { peers, userVideo, socketRef } = useSocketSignal({
    setStep,
    roomId,
  });
  const { handleClick, chat, isConnectStomp } = useSockStomp({ roomId });

  useEffect(() => () => dispatch(setToggleTrain({ toggleTrain: false })), []);

  const textBox = (
    <TextBox topText={Fixture[step].top} bottomText={Fixture[step].bottom} />
  );

  const isStepFirst = peers.length === 0 && step === 0;
  const isTrain = step === STEP_TRAIN_FIRST
    || step === STEP_TRAIN_SECOND
    || step === STEP_FINAL;

  useEffect(() => {
    console.log('peer length', peers.length);
    if (peers.length === 1 && step === 0) {
      dispatch(setToggleTrain({ toggleTrain: true }));
      setStep(STEP_CONNECT);
    }
    if (peers.length === 0 && step > 0) history.push('/group-study');
    if (isTrain) {
      dispatch(startTime({ count: 1800 }));
    }
    if (peers.length === 1 && step === STEP_FINAL - 1) {
      dispatch(showModal(MODALS.EVALUATION_MODAL));
    }
    return () => {};
  }, [peers, step, isConnectStomp, isTrain]);

  return (
    <S.Wrapper source={StudyBackground}>
      <Modal modalName={MODALS.EVALUATION_MODAL} roomId={roomId} />
      <S.WrapContainer>
        <S.WrapAbsolute>
          {!isStepFirst && (
            <Icon
              isCircle
              type="cancel_circle"
              func={() => history.push('/group-study')}
              alt="cancel"
            />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {textBox}
          <S.WrapCamView width={width / 1.5}>
            {!isTrain && (
              <MyCamView
                mediaBlobUrl={userVideo}
                height={width / 5}
                width={peers.length !== 0 ? width / 3.1 : width / 1.5}
                name="test"
                absolute={step >= 2}
              />
            )}
            {peers
              && peers.map((peer, index) => (
                <PeerVideo
                  key={index}
                  peer={peer}
                  height={width / 5}
                  width={isTrain ? width / 3.1 + 150 : width / 3.1}
                  isTrain={isTrain}
                  name="최빛"
                />
              ))}
            {isTrain && (
              <InterviewChat
                height={width / 5}
                setInterviewer
                chatData={chat}
                onClick={handleClick}
              />
            )}
          </S.WrapCamView>
          <S.WrapBottom width={width / 1.5}>
            <S.WrapBottomSide>
              {isTrain && <RemainTime time={time} />}
            </S.WrapBottomSide>
            <Button
              theme={step === STEP_FIRST ? 'gray' : 'blue'}
              text={Fixture[step].button}
              socketRef
              func={
                step + 1 !== STEP_FINAL
                  ? () => socketRef.current.emit('next', step + 1)
                  : () => console.log('last')
              }
            />
            <S.WrapBottomSide right />
          </S.WrapBottom>
        </S.WrapContent>
      </S.WrapContainer>
    </S.Wrapper>
  );
}

PeerStudyTrainPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
