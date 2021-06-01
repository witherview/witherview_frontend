import { createSlice } from '@reduxjs/toolkit';

const viewModeReducer = createSlice({
  name: 'viewMode',
  initialState: {
    viewMode: localStorage.getItem('viewMode') ? localStorage.getItem('viewMode') : 'light',
  },
  reducers: {
    toggleViewMode: (state, { payload: { viewMode } }) => {
      state.viewMode = viewMode;
    },
  },
});

export const { toggleViewMode } = viewModeReducer.actions;

export default viewModeReducer.reducer;
