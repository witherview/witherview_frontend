import { createSlice } from '@reduxjs/toolkit';

const timeReducer = createSlice({
  name: 'time',
  initialState: {
    time: 0,
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

export const { setTime } = timeReducer.actions;

export const resetTime = () => (dispatch) => {
  dispatch(setTime({ time: 0 }));
};

export default timeReducer.reducer;
