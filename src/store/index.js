import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timeReducer from './Time/time';
import authReducer from './Auth/auth';
import modalReducer from './Modal/modal';
import questionReducer from './Question/question';

export const reducers = combineReducers({
  modal: modalReducer,
  time: timeReducer,
  auth: authReducer,
  question: questionReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
