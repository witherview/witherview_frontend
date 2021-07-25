import api from '@context/serverContext';

// TODO: POST - /api/group/history
export const postPreGroupVideoApi = async (param) =>
  await api({
    url: '/api/group/history',
    type: 'post',
    param,
  });

// TODO: POST - /api/group/history/video
export const postGroupVideoApi = async (param) =>
  await api({
    url: '/api/group/history/video',
    type: 'post',
    param,
    contentType: 'multipart/form-data',
  });
