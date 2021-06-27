import { createSlice } from '@reduxjs/toolkit';
import { MODALS } from '@utils/constant';

const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: false,
    [MODALS.QUESTIONLIST_EDIT_MODAL]: false,
    [MODALS.SELF_TRAIN_START_MODAL]: false,
    [MODALS.STUDY_MAKE_MODAL]: false,
    [MODALS.EVALUATION_MODAL]: false,
    [MODALS.INDUSTRY_SELECT_MODAL]: false,
  },
  reducers: {
    displayModal(state, { payload: { modalName } }) {
      return {
        ...state,
        [modalName]: true,
      };
    },
    removeModal(state, { payload: { modalName } }) {
      return {
        ...state,
        [modalName]: false,
      };
    },
  },
});

export const { displayModal, removeModal } = modalReducer.actions;
export default modalReducer.reducer;
