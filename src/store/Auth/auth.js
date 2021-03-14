import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
    image: '',
    mainIndustry: '',
    mainJob: '',
    subIndustry: '',
    subJob: '',
    accessToken: '',
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
        email,
        name,
        image,
        mainIndustry,
        mainJob,
        subIndustry,
        subJob,
      };
    },
    setAccessToken(state, { payload: { accessToken } }) {
      sessionStorage.setItem('accessToken', accessToken);
      return {
        ...state,
        isLogin: true,
        accessToken,
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
      sessionStorage.setItem('image', image);
      return {
        ...state,
        image,
      };
    },
  },
});

export const {
  setLogin,
  setAccessToken,
  setLogout,
  setImage,
} = authReducer.actions;

export default authReducer.reducer;
