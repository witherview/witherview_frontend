/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import TimeButton from './TimeButton';

const timeReducer = createSlice({
  name: 'time',
  initialState: {
    time: 45,
  },
  reducers: {
    setTime(state, { payload: { time } }) {
      return {
        ...state,
        time,
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
  time: timeReducer.reducer,
  train: reducer,
});

const store = configureStore({ reducer: reducers });

const withReduxMockStore = (story) => (
  <Provider store={store}>{story()}</Provider>
);

export default {
  title: 'timeButton',
  component: TimeButton,
  decorators: [withReduxMockStore],
};

const TimeButtonComponent = (args) => <TimeButton {...args} />;

export const timeButton = TimeButtonComponent.bind({});

export const clickedTimeButton = TimeButtonComponent.bind({});

timeButton.args = { time: 30 };
clickedTimeButton.args = { time: 45 };
