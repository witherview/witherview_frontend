import React, { useState, useEffect } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import Timeout from 'await-timeout';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StudyBackground from '@assets/images/study_background.png';
import { setLogout } from '@store/Auth/auth';
import {
  startTime,
  handleReset,
  handleNextButton,
  handleStepQuestion,
  handleTimeFlag,
} from '@store/Time/time';
import { setStep, setHistoryId } from '@store/Train/train';
import { sortObjectByOrder, get } from '@utils/snippet';
import { getQuestionItemAPI } from '@repository/questionListRepository';
import { postPreSelfVideoApi } from '@repository/selfHistoryRepository';
import useReactMediaRecorder from '@hooks/useMediaRecorder';

import A from '@atoms';
import M from '@molecules';
import O from '@organisms';

import Fixture from './transitionFixture';
import QNA_LIST from './qnaListFixture';
import S from './SelfTrainPage.style';

const STEP_FIRST = 0;
const STEP_LOADING_1 = 1;
const STEP_LOADING_2 = 2;
const STEP_START = 3;
const STEP_ING = 4;
const TOGGLE_SCRIPT = 5;

export default function SelfTrainPage({ match }) {
  const { id } = match.params;
  const transition = new Timeout();

  const history = useHistory();
  const dispatch = useDispatch();

  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    video: true,
  });
  const { name } = useSelector(get('auth'));
  const { time } = useSelector(get('time'));
  const { company, job, viewAnswer, qnaStep, step } = useSelector(get('train'));

  const [questionList, setQuestionList] = useState(QNA_LIST);

  const fetch = async (requestId) => {
    try {
      const { data } = await getQuestionItemAPI(requestId);
      setQuestionList(sortObjectByOrder(data));
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(setLogout());
      }
      setQuestionList(QNA_LIST);
    }
  };

  useEffect(() => {
    fetch(id);
  }, []);

  const handleCancel = async () => {
    try {
      await stopRecording();
      transition.clear();
      history.push('/self');
      dispatch(handleReset({ keepTrain: false }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleChecklistPage = async () => {
    dispatch(handleTimeFlag());
    try {
      const { data } = await postPreSelfVideoApi({ questionListId: id });
      dispatch(setHistoryId({ historyId: data.id }));
      console.log(data, 'history');
      stopRecording();
      history.push(`/self/checklist/${id}`);
      dispatch(handleReset({ keepTrain: true, keepTimeFlag: true }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (!time && step === STEP_START) {
      dispatch(setStep({ step: STEP_ING }));
      startRecording();
    }

    if (!time && (step === STEP_ING || step === TOGGLE_SCRIPT)) {
      if (qnaStep === questionList.length - 1) handleChecklistPage();
      else dispatch(handleStepQuestion());
    }
  }, [time]);

  useEffect(() => {
    if (step === STEP_LOADING_1 || step === STEP_LOADING_2) {
      transition.set(5000).then(() => dispatch(setStep({ step: step + 1 })));
    }

    if (step === STEP_START) {
      dispatch(startTime({ count: 180 }));
    }
  }, [step]);

  // TODO: questionList의 원소가 1개일 경우에 처리하는 로직인데 바꿔야함;; 더 좋은 방법이 있을듯
  useEffect(() => {
    if (qnaStep === 1 && questionList.length === 1) {
      handleChecklistPage();
    }
  }, [qnaStep]);

  const isStepFirst = step === STEP_FIRST;
  const isLoading = step <= STEP_START;
  const isBackground = step > STEP_FIRST && step < STEP_ING;
  const isShowTimer = step >= STEP_START;
  const isShowToggle = step > STEP_START;
  const isShowAnswer = step === TOGGLE_SCRIPT;

  const textBox = (
    <M.TextBox
      topText={
        (step === STEP_LOADING_2 ? `${name}님은 ${company} ${job}` : '') +
        Fixture[step]?.top
      }
      bottomText={Fixture[step]?.bottom || ''}
    />
  );

  const questionTextBox = (
    <M.QuestionTextBox
      question={questionList[qnaStep]?.question || ''}
      order={questionList[qnaStep]?.order + 1 || 0}
    />
  );

  return (
    <S.Wrapper source={isBackground && StudyBackground}>
      <S.WrapContainer>
        <S.WrapAbsolute>
          {!isStepFirst && (
            <A.Icon
              isCircle
              type="cancel_circle"
              func={() => handleCancel()}
              alt="cancel"
            />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {isLoading ? textBox : questionTextBox}
          <S.WrapCamView isShowAnswer={isShowAnswer}>
            <O.CamView isShowAnswer={isShowAnswer} status={status} />
            {isShowAnswer && (
              <O.AnswerBox
                answer={questionList[qnaStep]?.answer}
                date={questionList[qnaStep]?.modifiedAt}
              />
            )}
          </S.WrapCamView>
          <S.WrapBottom>
            <S.WrapBottomSide>
              {isShowTimer && <M.RemainTime time={time} />}
            </S.WrapBottomSide>
            {/* STEP_ING의 경우 버튼 누를 때 구간 저장하는 로직 추가 필요 */}
            {Fixture[step]?.button && (
              <S.WrapButton>
                <A.Button
                  theme="blue"
                  text={Fixture[step].button}
                  func={
                    // TODO: 리펙토링 필요
                    qnaStep === questionList.length - 1 &&
                    questionList.length !== 1
                      ? () => handleChecklistPage()
                      : () => {
                          if (step === STEP_START) startRecording();
                          dispatch(handleNextButton());
                        }
                  }
                />
              </S.WrapButton>
            )}
            <S.WrapBottomSide right>
              {isShowToggle && viewAnswer && (
                <>
                  <S.WrapText>답변 보기 허용</S.WrapText>
                  <A.ToggleButton
                    funcActive={() =>
                      dispatch(setStep({ step: TOGGLE_SCRIPT }))
                    }
                    funcDeactive={() => dispatch(setStep({ step: STEP_ING }))}
                  />
                </>
              )}
            </S.WrapBottomSide>
          </S.WrapBottom>
        </S.WrapContent>
      </S.WrapContainer>
    </S.Wrapper>
  );
}

SelfTrainPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
