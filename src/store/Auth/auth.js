import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
    image: '',
    imageFile: '',
    mainIndustry: '',
    mainJob: '',
    subIndustry: '',
    subJob: '',
  },
  reducers: {
    setLogin(state, {
      payload: {
        email, name, image, mainIndustry, mainJob, subIndustry, subJob,
      },
    }) {
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('image', image);
      sessionStorage.setItem('mainIndustry', mainIndustry);
      sessionStorage.setItem('mainJob', mainJob);
      sessionStorage.setItem('subIndustry', subIndustry);
      sessionStorage.setItem('subJob', subJob);
      return {
        ...state,
        isLogin: true,
        email,
        name,
        image,
        mainIndustry,
        mainJob,
        subIndustry,
        subJob,
      };
    },
    setLogout(state) {
      return {
        ...state,
        isLogin: false,
        email: '',
        name: '',
        image: '',
      };
    },
    setImage(state, { payload: { image } }) {
      return {
        ...state,
        image,
      };
    },
    setImageFile(state, { payload: { imageFile } }) {
      return {
        ...state,
        imageFile,
      };
    },
  },
});

export const {
  setLogin, setLogout, setImage, setImageFile,
} = authReducer.actions;

export default authReducer.reducer;
