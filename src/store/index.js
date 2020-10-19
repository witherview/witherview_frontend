import { configureStore } from '@reduxjs/toolkit';

// import reducer from './Slice/slice';
import timeReducer from './Time/time';

const reducers = {
  time: timeReducer,
};

const store = configureStore({ reducer: reducers });

export default store;
