import api from '@context/serverContext';

// TODO: GET - /api/messages/chats
export const getChatMessagesApi = async (param) =>
  await api({
    url: '/api/messages/chats',
    type: 'get',
    param,
  });

// TODO: GET - /api/messages/feedbacks
export const getFeedbacksApi = async (param) =>
  await api({
    url: '/api/messages/feedbacks',
    type: 'get',
    param,
  });
