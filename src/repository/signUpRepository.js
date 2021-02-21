/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const signUpApi = async (param) => await api({
  url: '/register',
  type: 'post',
  param,
});
