import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timeReducer from './Time/time';
import authReducer from './Auth/auth';
import modalReducer from './Modal/modal';

export const reducers = combineReducers({
  modal: modalReducer,
  time: timeReducer,
  auth: authReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
