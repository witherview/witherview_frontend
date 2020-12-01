import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    uploadedLocation: '',
    localBlob: '',

  },
  reducers: {
    setUploadedLocation(state, { payload: { uploadedLocation } }) {
      return {
        ...state,
        uploadedLocation,
      };
    },
    setLocalBlob(state, { payload: { localBlob } }) {
      return {
        ...state,
        localBlob,
      };
    },
  },
});

export const { setUploadedLocation, setLocalBlob } = actions;

export default reducer;
