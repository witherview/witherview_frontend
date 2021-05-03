import api from '@context/serverContext';

export const getVideoApi = async (param) =>
  await api({
    url: '/api/self/history',
    type: 'get',
    param,
  });

export const postPreVideoApi = async (param) =>
  await api({
    url: '/api/self/history',
    type: 'post',
    param,
  });

// TODO: DELETE - /api/self/history/{id}

export const postVideoApi = async (param) =>
  await api({
    url: '/api/self/history/video',
    type: 'post',
    param,
    contentType: 'multipart/form-data',
  });
