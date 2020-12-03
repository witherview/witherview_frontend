import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
  },
  reducers: {
    setLogin(state, { payload: { email, name } }) {
      return {
        ...state,
        isLogin: true,
        email,
        name,
      };
    },
    setLogout(state) {
      return {
        ...state,
        isLogin: false,
        email: '',
        name: '',
      };
    },
  },
});

export const { setLogin, setLogout } = authReducer.actions;

export default authReducer.reducer;
