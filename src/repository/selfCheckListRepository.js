import api from '@context/serverContext';

// TODO: GET - /api/self/checklist
export const getSelfChecklistApi = async (param) => await api({
  url: '/api/self/checklist',
  type: 'get',
  param,
});

// TODO: POST - /api/self/checklist
export const postSelfChecklistApi = async (param) => await api({
  url: '/api/self/checklist',
  type: 'post',
  param,
});

// TODO: GET - /api/self/checklist/result
export const getEachSelfChecklistApi = async (param) => await api({
  url: `/api/self/checklist/result/${param}`,
  type: 'get',
});
