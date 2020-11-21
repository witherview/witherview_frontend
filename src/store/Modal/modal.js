import { createSlice } from '@reduxjs/toolkit';
import { MODALS } from '../../utils/constant';

const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: false,
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

export const showModal = (modalName) => (dispatch) => {
  dispatch(displayModal({ modalName }));
};

export const hideModal = (modalName) => (dispatch) => {
  dispatch(removeModal({ modalName }));
};

export default modalReducer.reducer;
