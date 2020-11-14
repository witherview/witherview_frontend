import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'modal',
  initialState: {
    show: false,
    element: null,
  },
  reducers: {
    displayModal(_, { payload: { element } }) {
      document.querySelector('body').style.overflow = "hidden";
      return {
        show: true,
        element,
      };
    },
    removeModal() {
        document.querySelector('body').style.overflow = "none";
      return {
        show: false,
        element: null,
      }
    }
  },
});

export const { displayModal, removeModal } = actions;

export const showModal = () => (dispatch) => {
  dispatch(displayModal({ element }));
};

export const hideModal = () => (dispatch) => {
  dispatch(removeModal());
};

export default reducer;
