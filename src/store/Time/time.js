import { createSlice } from '@reduxjs/toolkit';
import {
  setToggleTrain,
  setCompany,
  setJob,
  setStandardTime,
  setStep,
  setQnaStep,
} from '@store/Train/train';

const timeReducer = createSlice({
  name: 'time',
  initialState: {
    time: 0,
    timerId: '',
    timeFlag: [],
  },
  reducers: {
    setTime(state, { payload: { time } }) {
      return {
        ...state,
        time,
      };
    },
    setTimerId(state, { payload: { timerId } }) {
      return {
        ...state,
        timerId,
      };
    },
    setTimeFlag(state, { payload: { timeFlag } }) {
      return {
        ...state,
        timeFlag,
      };
    },
  },
});

export const { setTime, setTimerId, setTimeFlag } = timeReducer.actions;

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

const STEP_FIRST = 0;
const STEP_LOADING_1 = 1;
// const STEP_LOADING_2 = 2;
const STEP_START = 3;
const STEP_ING = 4;
const TOGGLE_SCRIPT = 5;

export const handleReset = ({ keepTrain = false, keepTimeFlag = false }) => (
  dispatch,
) => {
  dispatch(setStep({ step: STEP_FIRST }));
  dispatch(resetTime());
  dispatch(setQnaStep({ qnaStep: 0 }));
  dispatch(setStandardTime({ standardTime: 0 }));
  dispatch(setJob({ job: '' }));
  dispatch(setCompany({ company: '' }));
  if (!keepTimeFlag) dispatch(setTimeFlag({ timeFlag: [] }));

  if (!keepTrain) dispatch(setToggleTrain({ toggleTrain: false }));
};

export const handleStepQuestion = () => (dispatch, getState) => {
  const {
    train: { standardTime, qnaStep },
  } = getState();

  dispatch(startTime({ count: standardTime }));
  dispatch(setQnaStep({ qnaStep: qnaStep + 1 }));
};

export const handleTimeFlag = () => (dispatch, getState) => {
  const {
    train: { standardTime, qnaStep, step },
    time: { timeFlag, time },
  } = getState();
  if (step === STEP_ING || step === TOGGLE_SCRIPT) {
    const currentTime = standardTime - time;
    const calcTime = qnaStep > 0 ? currentTime + timeFlag[qnaStep - 1] : currentTime;

    dispatch(setTimeFlag({ timeFlag: [...timeFlag, calcTime] }));
  }
};

export const handleNextButton = () => (dispatch, getState) => {
  const {
    train: { standardTime, step },
  } = getState();
  if (step === STEP_FIRST) {
    dispatch(setStep({ step: STEP_LOADING_1 }));
    dispatch(setToggleTrain({ toggleTrain: true }));
  }
  if (step === STEP_START) {
    dispatch(setStep({ step: STEP_ING }));
    dispatch(startTime({ count: standardTime }));
  }
  if (step === STEP_ING || step === TOGGLE_SCRIPT) {
    dispatch(handleTimeFlag());
    dispatch(handleStepQuestion());
  }
};

export default timeReducer.reducer;
