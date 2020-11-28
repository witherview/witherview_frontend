import React, { useState, useEffect } from 'react';
import Timeout from 'await-timeout';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

  const { height, width } = useWindowSize();
  const { name } = useSelector(get('auth'));
  const { time, qnaStep, step } = useSelector(get('time'));

  const [questionList, setQuestionList] = useState(QNA_LIST);

  const fetch = async (id) => {
    try {
      await getQuestionItemAPI(id).then((response) => {
        setQuestionList(response.data);
        console.log(response);
      });
    } catch (err) {
      if (err?.response?.status === 401) {
        history.push('/');
      }
      setQuestionList(QNA_LIST);
      console.error(err);
    }
  };

  useEffect(() => {
    // TODO: id 개인화 해서 적용해야 함 <- redux 사용
    fetch(3);
  }, []);

  const handleCancel = () => {
    transition.clear();
    dispatch(handleReset());
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

  useEffect(() => {
    if (qnaStep === questionList?.length) {
      // TODO: 다음 페이지로 넘어가는 로직 추가해야 함
      handleCancel();
    }
  }, [qnaStep]);

  return (
    <S.Wrapper>
      <S.WrapContainer height={height}>
        <S.WrapAbsolute>
          {step !== STEP_FIRST && (
            <Icon
              isCircle
              type="cancel_circle"
              func={() => handleCancel()}
              alt="cancel"
            />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {step <= STEP_START ? (
            <TextBox
              topText={
                (step === STEP_LOADING_2
                  ? `${name}님은 ${COMPANY} ${JOB}`
                  : '') + Fixture[step].top
              }
              bottomText={Fixture[step].bottom}
            />
          ) : (
            <QuestionTextBox
              question={questionList[qnaStep]?.question || ''}
              order={questionList[qnaStep]?.order + 1 || 0}
              width={width / 1.5}
            />
          )}

          <S.WrapCamView width={width / 1.5}>
            <CamView
              height={width / 3}
              width={step === TOGGLE_SCRIPT ? width / 1.5 - 553 : width / 1.5}
            />
            {/* TODO: Server API(DATE) 반영되면 적용 */}
            {step === TOGGLE_SCRIPT && (
              <AnswerBox
                answer={questionList[qnaStep].answer}
                height={width / 3}
              />
            )}
          </S.WrapCamView>
          <S.WrapBottom width={width / 1.5}>
            <S.WrapBottomSide>
              {(step === STEP_START
                || step === STEP_ING
                || step === TOGGLE_SCRIPT) && <RemainTime time={time} />}
            </S.WrapBottomSide>
            {/* STEP_ING의 경우 버튼 누를 때 구간 저장하는 로직 추가 필요 */}
            {Fixture[step].button && (
              <Button
                theme="blue"
                text={Fixture[step].button}
                func={() => dispatch(handleNextButton())}
              />
            )}
            <S.WrapBottomSide right>
              {(step === STEP_ING || step === TOGGLE_SCRIPT) && (
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
