import api from '@context/serverContext';

export const getInterviewStudyRoomAPI = async (param) => await api({
  url: `/api/group/${param}`,
  type: 'get',
});
