import api from '@context/serverContext';

export const getQuestionListAPI = async (param) =>
  await api({
    url: `/api/self/questionList/${param || ''}`,
    type: 'get',
  });

export const postQuestionListAPI = async (param) =>
  await api({
    url: '/api/self/questionList',
    type: 'post',
    param,
  });

// TODO: PATCH - /api/self/questionList
export const patchQuestionListAPI = async (param) =>
  await api({
    url: '/api/self/questionList',
    type: 'patch',
    param,
  });

export const deleteQuestionListAPI = async (param) =>
  await api({
    url: `/api/self/questionList/${param || ''}`,
    type: 'delete',
  });

export const getEachQuestionItemAPI = async (param) =>
  await api({
    url: `/api/self/question/${param}`,
    type: 'get',
  });

export const postQuestionItemAPI = async (param) =>
  await api({
    url: '/api/self/question',
    type: 'post',
    param,
  });

export const patchQuestionItemAPI = async (param) =>
  await api({
    url: '/api/self/question',
    type: 'patch',
    param,
  });

export const deleteEachQuestionItemAPI = async (param) =>
  await api({
    url: `/api/self/question/${param}`,
    type: 'delete',
  });
