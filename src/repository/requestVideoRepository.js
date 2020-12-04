/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const postVideoApi = async (param) => await api({
  url: '/api/self/history',
  type: 'post',
  param,
  contentType: 'multipart/form-data',
});

export const getVideoApi = async (param) => await api({
  url: '/api/self/history',
  type: 'get',
  param,
});
