import React, { useState, useEffect } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
// import Timeout from 'await-timeout';
// import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useSocketSignal from '@hooks/useSocketSignal';
import StudyBackground from '@assets/images/study_background.png';
// import { setLogout } from '@store/Auth/auth';
import {
  startTime,
  // handleReset,
  // handleNextButton,
  // handleStepQuestion,
} from '@store/Time/time';
import { setToggleTrain, setSelectedQnaId } from '@store/Train/train';
import { postPreGroupVideoApi } from '@repository/studyHistoryRepository';

import { get } from '@utils/snippet';
// import { setStep, setHistoryId } from '@store/Train/train';
// import { postPreVideoApi } from '@repository/requestVideoRepository';
// import useReactMediaRecorder from '@hooks/useMediaRecorder';

import A from '@atoms';
import M from '@molecules';
import O from '@organisms';

// import useWindowSize from '@hooks/useWindowSize';

import Modal from '@organisms/Modal/Modal';
import { displayModal } from '@store/Modal/modal';
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

export default function PeerStudyTrainPage({
  roomId,
  history,
  handleClick,
  chat,
  isConnectStomp,
  onFeedbackSubscribe,
}) {
  // TODO: 녹화부분 연동
  // const { status, startRecording, stopRecording } = useReactMediaRecorder({
  //   stream: true,
  // });

  const dispatch = useDispatch();

  const { time } = useSelector(get('time'));
  const { isHost } = useSelector(get('train'));

  const [step, setStep] = useState(0);
  const { peers, userVideo, socketRef } = useSocketSignal({
    setStep,
    roomId,
  });

  useEffect(() => {
    if (isHost) {
      (async () => {
        const {
          data: { id },
        } = await postPreGroupVideoApi({ id: roomId });
        await dispatch(setSelectedQnaId({ selectedQnaId: id }));
        // TODO: socket으로 history id를 emit하는 코드 삽입
        onFeedbackSubscribe(id);
      })();
    } else {
      // TODO: socket으로 emit된 history id를 가져오는 코드 삽입
    }
    return () => dispatch(setToggleTrain({ toggleTrain: false }));
  }, []);

  const textBox = (
    <M.TextBox topText={Fixture[step].top} bottomText={Fixture[step].bottom} />
  );

  const isStepFirst = peers.length === 0 && step === 0;
  const isTrain =
    step === STEP_TRAIN_FIRST ||
    step === STEP_TRAIN_SECOND ||
    step === STEP_FINAL;

  useEffect(() => {
    if (peers.length === 1 && step === 0) {
      dispatch(setToggleTrain({ toggleTrain: true }));
      setStep(STEP_CONNECT);
    }
    // if (peers.length === 0 && step > 0) history.push('/peer-study');
    if (isTrain) {
      dispatch(startTime({ count: 1800 }));
    }
    if (peers.length === 1 && step === STEP_FINAL - 1) {
      dispatch(displayModal({ modalName: MODALS.EVALUATION_MODAL }));
    }
    return () => {};
  }, [peers, step, isConnectStomp, isTrain]);

  return (
    <S.Wrapper source={StudyBackground}>
      <Modal modalName={MODALS.EVALUATION_MODAL} roomId={roomId} />
      <S.WrapContainer>
        <S.WrapAbsolute>
          {!isStepFirst && (
            <A.Icon
              isCircle
              type="cancel_circle"
              func={() => history.push('/peer-study')}
              alt="cancel"
            />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {textBox}
          <S.WrapCamView isTrain={isTrain}>
            {!isTrain && (
              <MyCamView
                peers={step === STEP_CONNECT}
                mediaBlobUrl={userVideo}
                name="test"
                absolute={step >= 2}
              />
            )}
            {peers &&
              peers.map((peer, index) => (
                <PeerVideo
                  key={index}
                  peer={peer}
                  isTrain={isTrain}
                  name="최빛"
                />
              ))}
            {isTrain && (
              <O.InterviewChat
                setInterviewer
                chatData={chat}
                onClick={handleClick}
              />
            )}
          </S.WrapCamView>
          <S.WrapBottom>
            <S.WrapBottomSide>
              {isTrain && <M.RemainTime time={time} />}
            </S.WrapBottomSide>
            <S.WrapButton>
              <A.Button
                theme={step === STEP_FIRST ? 'gray' : 'blue'}
                text={Fixture[step].button}
                socketRef
                func={
                  step + 1 !== STEP_FINAL
                    ? () => socketRef.current.emit('next', step + 1)
                    : () => {}
                }
              />
            </S.WrapButton>
            <S.WrapBottomSide right />
          </S.WrapBottom>
        </S.WrapContent>
      </S.WrapContainer>
    </S.Wrapper>
  );
}

PeerStudyTrainPage.propTypes = {
  roomId: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
  handleClick: PropTypes.func,
  chat: PropTypes.array,
  isConnectStomp: PropTypes.bool,
  onFeedbackSubscribe: PropTypes.func,
};
