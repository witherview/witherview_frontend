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

const reducers = combineReducers({
  time: timeReducer.reducer,
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

const nomal = (args) => <TimeButton {...args} />;
const clicked = (args) => <TimeButton {...args} />;

export const timeButton = nomal.bind({});

export const clickedTimeButton = clicked.bind({});

timeButton.args = { time: 30 };
clickedTimeButton.args = { time: 45 };
