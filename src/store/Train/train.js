import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'train',
  initialState: {
    toggleTrain: false,
    company: '',
    job: '',
    standardTime: 0,
    viewAnswer: false,
    selectedQnaId: 3,
    uploadedLocation: '',
    localBlob: '',
    historyId: 0,
    isLoading: false,
    step: 0,
    qnaStep: 0,
  },
  reducers: {
    setToggleTrain(state, { payload: { toggleTrain } }) {
      return {
        ...state,
        toggleTrain,
      };
    },
    setCompany(state, { payload: { company } }) {
      return {
        ...state,
        company,
      };
    },
    setStandardTime(state, { payload: { standardTime } }) {
      return {
        ...state,
        standardTime,
      };
    },
    setJob(state, { payload: { job } }) {
      return {
        ...state,
        job,
      };
    },
    setViewAnswer(state, { payload: { viewAnswer } }) {
      return {
        ...state,
        viewAnswer,
      };
    },
    setSelectedQnaId(state, { payload: { selectedQnaId } }) {
      return {
        ...state,
        selectedQnaId,
      };
    },
    setUploadedLocation(state, { payload: { uploadedLocation } }) {
      return {
        ...state,
        uploadedLocation,
      };
    },
    setLocalBlob(state, { payload: { localBlob } }) {
      return {
        ...state,
        localBlob,
      };
    },
    setHistoryId(state, { payload: { historyId } }) {
      return {
        ...state,
        historyId,
      };
    },
    setIsLoading(state, { payload: { isLoading } }) {
      return {
        ...state,
        isLoading,
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
  setToggleTrain,
  setCompany,
  setJob,
  setStandardTime,
  setViewAnswer,
  setSelectedQnaId,
  setUploadedLocation,
  setLocalBlob,
  setHistoryId,
  setIsLoading,
  setStep,
  setQnaStep,
} = actions;

export default reducer;
