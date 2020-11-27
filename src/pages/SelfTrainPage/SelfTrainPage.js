import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

import Sidebar from '../../components/Sidebar';
import ProfileMenuContainer from '../../components/ProfileMenuContainer';
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
import S from './SelfTrainPage.style';

const STEP_FIRST = 0;
const STEP_LOADING_1 = 1;
const STEP_LOADING_2 = 2;
const STEP_START = 3;
const STEP_ING = 4;
const TOGGLE_SCRIPT = 5;

// TODO: 앞 페이지 완성하면 거기서 상태를 들고오도록 수정
const TIME = 45;
const NAME = '홍길동';
const COMPANY = '카카오 서비스 기획';

const QNA_LIST = [
  {
    id: 6,
    question: '질문입니다.',
    answer: '답변입니다.',
    order: 0,
  },
  {
    id: 8,
    question: 'string',
    answer: 'string',
    order: 1,
  },
];

export default function SelfTrainPage() {
  const { height, width } = useWindowSize();
  const resetId = useRef();

  const [step, setStep] = useState(STEP_FIRST);
  const [time, setTime] = useState(180);

  const [qnaStep, setQnaStep] = useState(0);

  const init = () => {
    clearTimeout(resetId.current);
    clearInterval(resetId.current);
  };

  const handleCancel = () => {
    setStep(STEP_FIRST);
    setTime(0);
    setQnaStep(0);
    init();
  };

  const handleCountTimer = useCallback((initTime) => {
    setTime(initTime);
    let i = 0;
    resetId.current = setInterval(() => {
      setTime(initTime - i);
      i += 1;
    }, 1000);
  }, [resetId, time]);

  const handleStepQuestion = () => {
    init();
    handleCountTimer(TIME);
    if (qnaStep === QNA_LIST.length) {
      // TODO: 다음 페이지로 넘어가는 로직 추가해야 함
      return () => {};
    }
    return setQnaStep(qnaStep + 1);
  };

  const handleNext = useCallback(() => {
    if (step === STEP_FIRST) {
      setStep(STEP_LOADING_1);
    }
    if (step === STEP_START) {
      setStep(STEP_ING);
      init();
      handleCountTimer(TIME);
    }
    if (step === STEP_ING || step === TOGGLE_SCRIPT) {
      handleStepQuestion();
    }
  }, [step]);

  useEffect(() => {
    if (step === STEP_LOADING_1 || step === STEP_LOADING_2) {
      resetId.current = setTimeout(() => {
        setStep(step + 1);
      }, 3000);
    }

    if (step === STEP_START) {
      handleCountTimer(180);
    }
  }, [step]);

  useEffect(() => {
    if (time === 0) {
      init();
      if (step === STEP_START) {
        setStep(STEP_ING);
        setTime(60);
      }

      if (step === STEP_ING || step === TOGGLE_SCRIPT) {
        handleStepQuestion();
      }
    }
  }, [time]);

  return (
    <S.Wrapper>
      {step === STEP_FIRST ? <Sidebar /> : <></>}
      <S.WrapContainer height={height}>
        <S.WrapAbsolute>
          {step === STEP_FIRST ? (
            <ProfileMenuContainer />
          ) : (
            <Icon
              isCircle
              type="cancel_circle"
              func={handleCancel}
              alt="cancel"
            />
          )}
        </S.WrapAbsolute>
        <S.WrapContent>
          {step <= STEP_START ? (
            <TextBox
              topText={
                (step === STEP_LOADING_2 ? `${NAME}님은 ${COMPANY} ` : '')
                + Fixture[step].top
              }
              bottomText={Fixture[step].bottom}
            />
          ) : (
            <QuestionTextBox
              question={QNA_LIST[qnaStep].question}
              order={QNA_LIST[qnaStep].order + 1}
              width={width / 1.5}
            />
          )}

          <S.WrapCamView width={width / 1.5}>
            <CamView
              height={width / 3}
              width={step === TOGGLE_SCRIPT ? width / 1.5 - 553 : width / 1.5}
            />
            {/* TODO: Server API(DATE) 반영되면 적용 */}
            {step === TOGGLE_SCRIPT ? (
              <AnswerBox answer={QNA_LIST[qnaStep].answer} />
            ) : (
              <></>
            )}
          </S.WrapCamView>
          <S.WrapBottom width={width / 1.5}>
            <S.WrapBottomSide>
              {step === STEP_START
              || step === STEP_ING
              || step === TOGGLE_SCRIPT ? (
                <RemainTime time={time} />
                ) : (
                  <></>
                )}
            </S.WrapBottomSide>
            {/* STEP_ING의 경우 버튼 누를 때 구간 저장하는 로직 추가 필요 */}
            {Fixture[step].button ? (
              <Button
                theme="blue"
                text={Fixture[step].button}
                func={handleNext}
              />
            ) : (
              <></>
            )}
            <S.WrapBottomSide right>
              {step === STEP_ING || step === TOGGLE_SCRIPT ? (
                <>
                  <S.WrapText>답변 보기 허용</S.WrapText>
                  <ToggleButton
                    funcActive={() => setStep(TOGGLE_SCRIPT)}
                    funcDeactive={() => setStep(STEP_ING)}
                  />
                </>
              ) : (
                <></>
              )}
            </S.WrapBottomSide>
          </S.WrapBottom>
        </S.WrapContent>
      </S.WrapContainer>
    </S.Wrapper>
  );
}
