import { createSlice } from '@reduxjs/toolkit';

const groupReducer = createSlice({
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
  },
});

const { addQuestions, resetQuestions } = groupReducer.actions;

export const AddQuestions = ({ questions }) => async (dispatch) => {
  dispatch(addQuestions({ questions }));
};

export const ResetQuestions = () => (dispatch) => {
  dispatch(resetQuestions());
};

export default groupReducer.reducer;
