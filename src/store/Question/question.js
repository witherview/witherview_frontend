import { createSlice } from '@reduxjs/toolkit';

const questionReducer = createSlice({
  name: 'question',
  initialState: {
    questions: [],
  },
  reducers: {
    addQuestions(state, { payload: { questions } }) {
      return {
        ...state,
        questions,
      };
    },
    resetQuestions() {
      return [];
    },
  },
});

const { addQuestions, resetQuestions } = questionReducer.actions;

export const AddQuestions = ({ questions }) => (dispatch) => {
  dispatch(addQuestions({ questions }));
};

export const ResetQuestions = () => (dispatch) => {
  dispatch(resetQuestions());
};

export default questionReducer.reducer;
