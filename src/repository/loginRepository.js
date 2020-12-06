/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const LoginApi = async (param) => await api({
  url: '/login',
  type: 'post',
  param,
});

export const getUserApi = async (param) => await api({
  url: '/api/myinfo',
  type: 'get',
  param,
});
