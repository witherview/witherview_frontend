import api from '@context/serverContext';

export const loginApi = async (param) => await api({
  url: '/login',
  type: 'post',
  param,
});

export const getUserApi = async (param) => await api({
  url: '/api/myinfo',
  type: 'get',
  param,
});
