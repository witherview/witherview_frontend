import api from '@context/serverContext';

export const getSelfVideoApi = async (param) =>
  await api({
    url: '/api/self/history',
    type: 'get',
    param,
  });

export const postPreSelfVideoApi = async (param) =>
  await api({
    url: '/api/self/history',
    type: 'post',
    param,
  });

// TODO: DELETE - /api/self/history/{id}
export const deleteSelfVideoApi = async (param) =>
  await api({
    url: `/api/self/history/${param}`,
    type: 'delete',
  });

export const postSelfVideoApi = async (param) =>
  await api({
    url: '/api/self/history/video',
    type: 'post',
    param,
    contentType: 'multipart/form-data',
  });
