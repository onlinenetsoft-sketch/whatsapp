const admin = require(
  './firebase.config'
);

class PushService {
  async sendPushNotification({
    token,
    title,
    body,
    data = {},
  }) {
    const message = {
      notification: {
        title,
        body,
      },

      data,

      token,
    };

    return await admin
      .messaging()
      .send(message);
  }

  async sendBulkNotification(
    tokens,
    title,
    body
  ) {
    const message = {
      notification: {
        title,
        body,
      },

      tokens,
    };

    return await admin
      .messaging()
      .sendEachForMulticast(message);
  }
}

module.exports = new PushService();