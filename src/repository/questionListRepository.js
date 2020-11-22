/* eslint-disable no-return-await */
import api from '../context/serverContext';

export const getQuestionListAPI = async (param) => await api({
  url: '/api/self/questionList',
  type: 'get',
  param,
});

