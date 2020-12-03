import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'train',
  initialState: {
    company: '',
    job: '',
    viewAnswer: false,
    selectedQnaId: 3,
    uploadedLocation: '',
    localBlob: '',
  },
  reducers: {
    setCompany(state, { payload: { company } }) {
      return {
        ...state,
        company,
      };
    },
    setJob(state, { payload: { job } }) {
      return {
        ...state,
        job,
      };
    },
    setViewAnswer(state, { payload: { viewAnswer } }) {
      return {
        ...state,
        viewAnswer,
      };
    },
    setSelectedQnaId(state, { payload: { selectedQnaId } }) {
      return {
        ...state,
        selectedQnaId,
      };
    },
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

export const {
  setCompany,
  setJob,
  setViewAnswer,
  setSelectedQnaId,
  setUploadedLocation,
  setLocalBlob,
} = actions;

export default reducer;
