/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const getInterviewStudyRoomAPI = async (param) => await api({
  url: `/api/group/${param}`,
  type: 'get',
});
