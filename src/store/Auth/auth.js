import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
    image: '',
    imageFile: '',
  },
  reducers: {
    setLogin(state, { payload: { email, name, image } }) {
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('image', image);
      return {
        ...state,
        isLogin: true,
        email,
        name,
        image,
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
