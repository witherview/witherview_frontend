import api from '@context/serverContext';

export const postGroupFeedback = async (param) =>
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

export const getGroupRoomEachApi = async (param) =>
  await api({
    url: `/api/group/room/${param}`,
    type: 'get',
  });

// TODO: DELETE - /api/group/room/{id}
// TODO: PATCH - /api/group/room/{id}

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

// TODO: DELETE - /api/group/room/{id}/participants
