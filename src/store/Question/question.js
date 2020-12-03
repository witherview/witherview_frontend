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

const { addQuestions, resetQuestions, setReload } = questionReducer.actions;

export const AddQuestions = ({ questions }) => async (dispatch) => {
  dispatch(addQuestions({ questions }));
};

export const ResetQuestions = () => (dispatch) => {
  dispatch(resetQuestions());
};

export const SetReload = () => (dispatch) => {
  dispatch(setReload());
};

export default questionReducer.reducer;
