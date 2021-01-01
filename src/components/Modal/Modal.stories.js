/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { MODALS } from '@utils/constant';
import Modal from './Modal';

const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: true,
    [MODALS.SELF_TRAIN_START_MODAL]: true,
    [MODALS.STUDY_MAKE_MODAL]: true,
    [MODALS.EVALUATION_MODAL]: true,
  },
  reducers: {
    displayModal(state, { payload: { modalName } }) {
      return {
        ...state,
        [modalName]: true,
      };
    },
    removeModal(state, { payload: { modalName } }) {
      return {
        ...state,
        [modalName]: false,
      };
    },
  },
});

const questionReducer = createSlice({
  name: 'question',
  initialState: {
    reload: false,
    questions: [],
  },
  reducers: {
    addQuestions(state, { payload: { questions } }) {
      return {
        ...state,
        questions,
      };
    },
    resetQuestions(state) {
      return {
        ...state,
        questions: [],
      };
    },
    setReload(state) {
      return {
        ...state,
        reload: !state.reload,
      };
    },
  },
});

const { reducer } = createSlice({
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

const reducers = combineReducers({
  modal: modalReducer.reducer,
  question: questionReducer.reducer,
  train: reducer,
});

const store = configureStore({ reducer: reducers });

const withReduxMockStore = (story) => (
  <Provider store={store}>{story()}</Provider>
);

export default {
  title: 'Modals/Modals',
  description: 'modals',
  decorators: [withReduxMockStore],
};

const modals = (args) => <Modal {...args} />;
export const QuestionListSaveModal = modals.bind({});
export const SelfTrainStartModal = modals.bind({});
export const StudyMakeModal = modals.bind({});
export const EvaluationModal = modals.bind({});

QuestionListSaveModal.args = {
  modalName: MODALS.QUESTIONLIST_SAVE_MODAL,
};

SelfTrainStartModal.args = {
  modalName: MODALS.SELF_TRAIN_START_MODAL,
};

StudyMakeModal.args = {
  modalName: MODALS.STUDY_MAKE_MODAL,
};

EvaluationModal.args = {
  modalName: MODALS.EVALUATION_MODAL,
};
