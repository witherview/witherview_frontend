/* eslint-disable no-return-await */
import api from '../context/serverContext';

export const getQuestionListAPI = async (param) => await api({
  url: '/api/self/questionList',
  type: 'get',
  param,
});

export const getQuestionItemAPI = async (param) => await api({
  url: '/api/self/question',
  type: 'get',
  param,
});
