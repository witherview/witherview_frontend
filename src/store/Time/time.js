import { createSlice } from '@reduxjs/toolkit';

const timeReducer = createSlice({
  name: 'time',
  initialState: {
    time: 0,
    toggleTrain: false,
    timerId: '',
    step: 0,
    qnaStep: 0,
  },
  reducers: {
    setTime(state, { payload: { time } }) {
      return {
        ...state,
        time,
      };
    },
    setToggleTrain(state, { payload: { toggleTrain } }) {
      return {
        ...state,
        toggleTrain,
      };
    },
    setTimerId(state, { payload: { timerId } }) {
      return {
        ...state,
        timerId,
      };
    },
    setStep(state, { payload: { step } }) {
      return {
        ...state,
        step,
      };
    },
    setQnaStep(state, { payload: { qnaStep } }) {
      return {
        ...state,
        qnaStep,
      };
    },
  },
});

export const {
  setTime,
  setTickTime,
  setToggleTrain,
  setTimerId,
  setStep,
  setQnaStep,
} = timeReducer.actions;

export const resetTime = () => (dispatch, getState) => {
  const {
    time: { timerId },
  } = getState();
  clearInterval(timerId);
  dispatch(setTimerId({ timerId: '' }));
  dispatch(setTime({ time: 0 }));
};

export const startTime = ({ count }) => (dispatch, getState) => {
  dispatch(resetTime());
  dispatch(setTime({ time: count }));

  const timerId = setInterval(() => {
    const {
      time: { time },
    } = getState();
    if (time === 0) {
      return dispatch(resetTime());
    }
    return dispatch(setTime({ time: time - 1 }));
  }, 1000);

  dispatch(setTimerId({ timerId }));
};

const TIME = 45;

const STEP_FIRST = 0;
const STEP_LOADING_1 = 1;
// const STEP_LOADING_2 = 2;
const STEP_START = 3;
const STEP_ING = 4;
const TOGGLE_SCRIPT = 5;

export const handleReset = ({ keepTrain = false }) => (dispatch) => {
  dispatch(setStep({ step: STEP_FIRST }));
  dispatch(resetTime());
  dispatch(setQnaStep({ qnaStep: 0 }));
  if (!keepTrain) dispatch(setToggleTrain({ toggleTrain: false }));
};

export const handleStepQuestion = () => (dispatch, getState) => {
  const {
    time: { qnaStep },
  } = getState();
  // TODO: 앞에서 설정한 TIME으로 변경해야 함
  dispatch(startTime({ count: TIME }));
  dispatch(setQnaStep({ qnaStep: qnaStep + 1 }));
};

export const handleNextButton = () => (dispatch, getState) => {
  const {
    time: { step },
  } = getState();
  if (step === STEP_FIRST) {
    dispatch(setStep({ step: STEP_LOADING_1 }));
    dispatch(setToggleTrain({ toggleTrain: true }));
  }
  if (step === STEP_START) {
    dispatch(setStep({ step: STEP_ING }));
    // TODO: 앞에서 설정한 TIME으로 변경해야 함
    dispatch(startTime({ count: TIME }));
  }
  if (step === STEP_ING || step === TOGGLE_SCRIPT) {
    dispatch(handleStepQuestion());
  }
};

export default timeReducer.reducer;
