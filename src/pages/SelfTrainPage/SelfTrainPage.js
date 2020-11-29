import React, { useState, useEffect } from 'react';
import Timeout from 'await-timeout';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../store/Auth/auth';
import {
  startTime,
  handleReset,
  handleNextButton,
  setStep,
  handleStepQuestion,
} from '../../store/Time/time';
import { get } from '../../utils/snippet';
import { getQuestionItemAPI } from '../../repository/questionListRepository';

import CamView from '../../components/CamView';

import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

import RemainTime from '../../components/RemainTime';
import ToggleButton from '../../components/ToggleButton';
import AnswerBox from '../../components/AnswerBox';
import QuestionTextBox from '../../components/QuestionTextBox';
import useWindowSize from '../../hooks/useWindowSize';

import Fixture from './transitionFixture';
import QNA_LIST from './qnaListFixture';
import S from './SelfTrainPage.style';

const STEP_FIRST = 0;
const STEP_LOADING_1 = 1;
const STEP_LOADING_2 = 2;
const STEP_START = 3;
const STEP_ING = 4;
const TOGGLE_SCRIPT = 5;

// TODO: 앞 페이지 완성하면 거기서 상태를 들고오도록 수정
const COMPANY = '카카오';
const JOB = '서비스 기획';

export default function SelfTrainPage() {
  const transition = new Timeout();

  const history = useHistory();
  const dispatch = useDispatch();

  const { width } = useWindowSize();
  const { name } = useSelector(get('auth'));
  const { time, qnaStep, step } = useSelector(get('time'));

  const [questionList, setQuestionList] = useState(QNA_LIST);

  const fetch = async (id) => {
    try {
      await getQuestionItemAPI(id).then((response) => {
        setQuestionList(response.data);
      });
    } catch (err) {
      if (err.response.status === 401) {
        dispatch(setLogout());
      }
      setQuestionList(QNA_LIST);
    }
  };

  useEffect(() => {
    // TODO: id 개인화 해서 적용해야 함 <- redux 사용
    dispatch(handleReset({ keepTrain: false }));
    fetch(3);
  }, []);

  const handleCancel = () => {
    transition.clear();
    dispatch(handleReset({ keepTrain: false }));
  };

  const handleChecklistPage = () => {
    history.push('/self-checklist');
    dispatch(handleReset({ keepTrain: true }));
  };

  useEffect(() => {
    if (!time && step === STEP_START) {
      dispatch(setStep({ step: STEP_ING }));
    }

    if (!time && (step === STEP_ING || step === TOGGLE_SCRIPT)) {
      dispatch(handleStepQuestion());
    }
  }, [time]);

  useEffect(() => {
    if (step === STEP_LOADING_1 || step === STEP_LOADING_2) {
      transition.set(3000).then(() => dispatch(setStep({ step: step + 1 })));
    }

    if (step === STEP_START) {
      dispatch(startTime({ count: 180 }));
    }
  }, [step]);

  const isStepFirst = step === STEP_FIRST;
  const isLoading = step <= STEP_START;
  const isShowTimer = step >= STEP_START;
  const isShowToggle = step > STEP_START;
  const isShowAnswer = step === TOGGLE_SCRIPT;

  const textBox = (
    <TextBox
      topText={
        (step === STEP_LOADING_2 ? `${name}님은 ${COMPANY} ${JOB}` : '')
        + Fixture[step]?.top
      }
      bottomText={Fixture[step]?.bottom || ''}
    />
  );

  const questionTextBox = (
    <QuestionTextBox
      question={questionList[qnaStep]?.question || ''}
      order={questionList[qnaStep]?.order + 1 || 0}
      width={width / 1.5}
    />
  );

  return (
    <S.Wrapper>
      <S.WrapContainer>
        <S.WrapAbsolute>
          {!isStepFirst && (
            <Icon
              isCircle
              type="cancel_circle"
              func={() => handleCancel()}
              alt="cancel"
            />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {(isLoading ? textBox : questionTextBox)}
          <S.WrapCamView width={width / 1.5}>
            <CamView
              height={width / 3}
              width={isShowAnswer ? width / 1.5 - 553 : width / 1.5}
            />
            {/* TODO: Server API(DATE) 반영되면 적용 */}
            {isShowAnswer && (
              <AnswerBox
                answer={questionList[qnaStep].answer}
                height={width / 3}
              />
            )}
          </S.WrapCamView>
          <S.WrapBottom width={width / 1.5}>
            <S.WrapBottomSide>
              {isShowTimer && <RemainTime time={time} />}
            </S.WrapBottomSide>
            {/* STEP_ING의 경우 버튼 누를 때 구간 저장하는 로직 추가 필요 */}
            {Fixture[step]?.button && (
              <Button
                theme="blue"
                text={Fixture[step].button}
                func={
                  qnaStep === questionList.length - 1
                    ? () => handleChecklistPage()
                    : () => dispatch(handleNextButton())
                }
              />
            )}
            <S.WrapBottomSide right>
              {isShowToggle && (
                <>
                  <S.WrapText>답변 보기 허용</S.WrapText>
                  <ToggleButton
                    funcActive={() => dispatch(setStep({ step: TOGGLE_SCRIPT }))}
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
