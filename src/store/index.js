import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timeReducer from './Time/time';
import modalReducer from './Modal/modal';

export const reducers = combineReducers({
  modal: modalReducer,
  time: timeReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
