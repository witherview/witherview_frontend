/* eslint-disable no-return-await */
import api from '@context/serverContext';

export const getQuestionListAPI = async (param) => await api({
  url: '/api/self/questionList',
  type: 'get',
  param,
});

export const postQuestionListAPI = async (param) => await api({
  url: '/api/self/questionList',
  type: 'post',
  param,
});

export const deleteQuestionListAPI = async (param) => await api({
  url: `/api/self/questionList/${param}`,
  type: 'delete',
});

export const getQuestionItemAPI = async (param) => await api({
  url: `/api/self/question?listId=${param}`,
  type: 'get',
});

export const postQuestionItemAPI = async (param) => await api({
  url: '/api/self/question',
  type: 'post',
  param,
});

export const patchQuestionItemAPI = async (param) => await api({
  url: '/api/self/question',
  type: 'patch',
  param,
});

export const deleteQuestionItemAPI = async (param) => await api({
  url: `/api/self/question/${param}`,
  type: 'delete',
});
