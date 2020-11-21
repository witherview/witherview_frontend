import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timeReducer from './Time/time';
import authReducer from './Auth/auth';

export const reducers = combineReducers({
  time: timeReducer,
  auth: authReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
