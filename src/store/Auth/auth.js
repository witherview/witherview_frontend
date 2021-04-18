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
  },
  reducers: {
    setLogin(
      state,
      {
        payload: {
          isLogin,
          email,
          name,
          image,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
        },
      },
    ) {
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('image', image);
      sessionStorage.setItem('mainIndustry', mainIndustry);
      sessionStorage.setItem('mainJob', mainJob);
      sessionStorage.setItem('subIndustry', subIndustry);
      sessionStorage.setItem('subJob', subJob);
      return {
        ...state,
        isLogin,
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
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('image');
      sessionStorage.removeItem('mainIndustry');
      sessionStorage.removeItem('mainJob');
      sessionStorage.removeItem('subIndustry');
      sessionStorage.removeItem('subJob');
      return {
        ...state,
        isLogin: false,
        email: '',
        name: '',
        image: '',
        mainIndustry: '',
        mainJob: '',
        subIndustry: '',
        subJob: '',
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

export const { setLogin, setLogout, setImage } = authReducer.actions;

export default authReducer.reducer;
