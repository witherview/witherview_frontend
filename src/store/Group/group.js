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
    setReload(state) {
      return {
        ...state,
        reload: !state.reload,
      };
    },
  },
});

const { addQuestions, resetQuestions, setReload } = groupReducer.actions;

export const AddQuestions = ({ questions }) => async (dispatch) => {
  dispatch(addQuestions({ questions }));
};

export const ResetQuestions = () => (dispatch) => {
  dispatch(resetQuestions());
};

export const SetReload = () => (dispatch) => {
  dispatch(setReload());
};

export default groupReducer.reducer;
