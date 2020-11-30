import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
    selectedQnaId: 3,
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
    setSelectedQnaId(state, { payload: { selectedQnaId } }) {
      return {
        ...state,
        selectedQnaId,
      };
    },
  },
});

export const { setLogin, setLogout, setSelectedQnaId } = authReducer.actions;

export default authReducer.reducer;
