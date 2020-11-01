import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timeReducer from './Time/time';

export const reducers = combineReducers({
  time: timeReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
