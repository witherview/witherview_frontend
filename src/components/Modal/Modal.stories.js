/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import Modal from './Modal';
import { MODALS } from '@utils/constant';

const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: true,
    [MODALS.SELF_TRAIN_START_MODAL]: true,
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

const reducers = combineReducers({
  modal: modalReducer.reducer,
});

const store = configureStore({ reducer: reducers });

const withReduxMockStore = (story) => (
  <Provider store={store}>{story()}</Provider>
);

export default {
  title: 'Modal',
  description: 'modals',
  decorators: [withReduxMockStore],
};

const modals = (args) => <Modal {...args} />;
export const QuestionListSaveModal = modals.bind({});
export const SelfTrainStartModal = modals.bind({});

QuestionListSaveModal.args = {
  modalName: MODALS.QUESTIONLIST_SAVE_MODAL,
};

SelfTrainStartModal.args = {
  modalName: MODALS.SELF_TRAIN_START_MODAL,
};
