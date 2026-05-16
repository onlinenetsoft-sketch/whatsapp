const whatsappConfig = {
  sessionPath: process.env.WHATSAPP_SESSION_PATH || './sessions',

  reconnectInterval: 5000,

  maxRetries: 10,

  qrTimeout: 60000
};

module.exports = whatsappConfig;