/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const getGroupListApi = async (param) => await api({
  url: `/api/group?page=${param}`,
  type: 'get',
});

export const getGroupMemberApi = async (param) => await api({
  url: `/api/group/room/${param}`,
  type: 'get',
});

export const postStudyApi = async (param) => await api({
  url: '/api/group',
  type: 'post',
  param,
});
