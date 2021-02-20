/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const putProfileInfoApi = async (param) => await api({
  url: '/api/myinfo',
  type: 'put',
  param,
});

export const postProfileImageApi = async (param) => await api({
  url: '/api/myinfo/profile',
  type: 'post',
  param,
});
