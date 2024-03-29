import api from '@context/serverContext';

export const postGroupFeedbackApi = async (param) =>
  await api({
    url: '/api/group/feedback',
    type: 'post',
    param,
  });

export const getGroupRoomApi = async (param) =>
  await api({
    url: `/api/group/room?page=${param}`,
    type: 'get',
  });

export const postGroupRoomApi = async (param) =>
  await api({
    url: '/api/group/room',
    type: 'post',
    param,
  });

export const getEachGroupRoomApi = async (param) =>
  await api({
    url: `/api/group/room/${param}`,
    type: 'get',
  });

export const deleteEachGroupRoomApi = async (param) =>
  await api({
    url: `/api/group/room/${param}`,
    type: 'delete',
  });

// TODO: PATCH - /api/group/room/{id}
export const patchEachGroupRoomApi = async (param) =>
  await api({
    url: `/api/group/room/${param}`,
    type: 'patch',
  });

export const patchPassRoomHostEachGroupRoomApi = async (param) =>
  await api({
    url: `/api/group/room/${param}/host`,
    type: 'patch',
  });

export const getGroupRoomParticipantsApi = async (param) =>
  await api({
    url: `/api/group/room/${param}/participants`,
    type: 'get',
  });

export const postGroupRoomParticipantsApi = async (param) =>
  await api({
    url: `/api/group/room/${param}/participants`,
    type: 'post',
    param,
  });

export const deleteEachGroupRoomParticipantsApi = async (param) =>
  await api({
    url: `/api/group/room/${param}/participants`,
    type: 'delete',
  });

// TODO: set API
export const postSelectedIndustriesApi = () => {};
