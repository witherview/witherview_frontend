import { createSlice } from '@reduxjs/toolkit';

const questionReducer = createSlice({
  name: 'question',
  initialState: {
    reload: false,
    questions: [],
  },
  reducers: {
    addQuestions(state, { payload: { questions } }) {
      return {
        ...state,
        questions,
      };
    },
    resetQuestions(state) {
      return {
        ...state,
        questions: [],
      };
    },
    setReload(state) {
      return {
        ...state,
        reload: !state.reload,
      };
    },
  },
});

export const { addQuestions, resetQuestions, setReload } = questionReducer.actions;

export default questionReducer.reducer;
