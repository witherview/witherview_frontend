import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    user: '',
  },
  reducers: {
    setLogin(state, { payload: { user } }) {
      return {
        ...state,
        isLogin: true,
        user,
      };
    },
    setLogout(state) {
      return {
        ...state,
        isLogin: false,
        user: '',
      };
    },
  },
});

export const { setLogin, setLogout } = authReducer.actions;

export default authReducer.reducer;
