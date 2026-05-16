module.exports = {
  USER_SESSION: (userId) => `user:session:${userId}`,

  USER_PROFILE: (userId) => `user:profile:${userId}`,

  CHAT_MESSAGES: (conversationId) =>
    `chat:messages:${conversationId}`,

  ANALYTICS: (key) => `analytics:${key}`,

  NOTIFICATIONS: (userId) => `notifications:${userId}`,
};