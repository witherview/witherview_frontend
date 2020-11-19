import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'modal',
  initialState: {
    show: false,
    props: null,
    element: null,
    style: '',
  },
  reducers: {
    displayModal(state, { payload: { props, element, style } }) {
      document.querySelector('body').style.overflow = "hidden";
      return {
        ...state,
        show: true,
        props,
        element,
        style,
      };
    },
    removeModal(state) {
      document.querySelector('body').style.overflow = "none";
      return {
        ...state,
        show: false,
        element: null,
      }
    }
  },
});

export const { displayModal, removeModal } = actions;

export const showModal = ({props, element, style}) => (dispatch) => {
  dispatch(displayModal({ props, element, style }));
};

export const hideModal = () => (dispatch) => {
  dispatch(removeModal());
};

export default reducer;
