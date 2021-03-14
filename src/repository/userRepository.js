import api from '@context/serverContext';

export const getUserInfoApi = async (param) => await api({
  url: '/api/user',
  type: 'get',
  param,
});
