import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    number: 0,
  },
  reducers: {
    setNumber(state, { payload: { number } }) {
      return {
        ...state,
        number,
      };
    },
  },
});

export const { setNumber } = actions;

export const resetNumber = () => (dispatch) => {
  dispatch(setNumber({ number: 0 }));
};

export default reducer;
