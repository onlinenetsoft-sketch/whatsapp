import api from './api';

export const getMessages = async (
  conversationId
) => {
  const response = await api.get(
    `/messages/${conversationId}`
  );

  return response.data;
};

export const sendMessage = async (
  payload
) => {
  const response = await api.post(
    '/messages/send',
    payload
  );

  return response.data;
};

export const getConversations =
  async () => {
    const response = await api.get(
      '/messages/conversations'
    );

    return response.data;
  };