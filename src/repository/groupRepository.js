import api from '@context/serverContext';

export const getGroupListApi = async (param) => await api({
  url: `/api/group/room?page=${param}`,
  type: 'get',
});

export const getGroupMemberApi = async (param) => await api({
  url: `/api/group/room/${param}`,
  type: 'get',
});

export const postStudyApi = async (param) => await api({
  url: '/api/group/room',
  type: 'post',
  param,
});

export const postJoinStudyApi = async (param) => await api({
  url: '/api/group/room',
  type: 'post',
  param,
});

export const postGroupFeedback = async (param) => await api({
  url: '/api/group/feedback',
  type: 'post',
  param,
});
