import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
    profileImg: '',
    mainIndustry: '',
    mainJob: '',
    subIndustry: '',
    subJob: '',
    phoneNumber: '',
  },
  reducers: {
    setLogin(
      state,
      {
        payload: {
          isLogin,
          email,
          name,
          profileImg,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
          phoneNumber,
        },
      },
    ) {
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('profileImg', profileImg);
      sessionStorage.setItem('mainIndustry', mainIndustry);
      sessionStorage.setItem('mainJob', mainJob);
      sessionStorage.setItem('subIndustry', subIndustry);
      sessionStorage.setItem('subJob', subJob);
      sessionStorage.setItem('phoneNumber', phoneNumber);
      return {
        ...state,
        isLogin,
        email,
        name,
        profileImg,
        mainIndustry,
        mainJob,
        subIndustry,
        subJob,
        phoneNumber,
      };
    },
    setLogout(state) {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('profileImg');
      sessionStorage.removeItem('mainIndustry');
      sessionStorage.removeItem('mainJob');
      sessionStorage.removeItem('subIndustry');
      sessionStorage.removeItem('subJob');
      sessionStorage.removeItem('phoneNumber');
      return {
        ...state,
        isLogin: false,
        email: '',
        name: '',
        profileImg: '',
        mainIndustry: '',
        mainJob: '',
        subIndustry: '',
        subJob: '',
        phoneNumber: '',
      };
    },
    setProfileImg(state, { payload: { profileImg } }) {
      sessionStorage.setItem('profileImg', profileImg);
      return {
        ...state,
        profileImg,
      };
    },
  },
});

export const { setLogin, setLogout, setProfileImg } = authReducer.actions;

export default authReducer.reducer;
