import api from '@context/serverContext';

export const getUserStatisticsApi = async (param) =>
  await api({
    url: '/api/myinfo',
    type: 'get',
    param,
  });

export const putProfileInfoApi = async (param) =>
  await api({
    url: '/api/myinfo',
    type: 'put',
    param,
  });

export const postProfileImageApi = async (param) =>
  await api({
    url: '/api/myinfo/profile',
    type: 'post',
    param,
  });

// TODO: GET - /api/myinfo/rooms

export const getUserInfoApi = async (param) =>
  await api({
    url: '/api/user',
    type: 'get',
    param,
  });

export const loginApi = async (param) =>
  await api({
    url: '/login',
    type: 'post',
    param,
  });

export const registerApi = async (param) =>
  await api({
    url: '/register',
    type: 'post',
    param,
  });
