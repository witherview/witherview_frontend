/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const postPreVideoApi = async (param) => await api({
  url: '/api/self/history',
  type: 'post',
  param,
});

export const postVideoApi = async (param) => await api({
  url: '/api/self/history/video',
  type: 'post',
  param,
  contentType: 'multipart/form-data',
});

export const getVideoApi = async (param) => await api({
  url: '/api/self/history',
  type: 'get',
  param,
});
