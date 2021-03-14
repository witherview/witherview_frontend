import api from '@context/serverContext';

export const signUpApi = async (param) => await api({
  url: '/register',
  type: 'post',
  param,
});
