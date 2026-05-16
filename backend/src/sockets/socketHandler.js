const { Server } = require('socket.io');

const registerChatSocket = require('./chat.socket');
const registerNotificationSocket = require('./notification.socket');
const registerPresenceSocket = require('./presence.socket');
const registerAnalyticsSocket = require('./analytics.socket');

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`🔌 User Connected: ${socket.id}`);

    registerChatSocket(io, socket);
    registerNotificationSocket(io, socket);
    registerPresenceSocket(io, socket);
    registerAnalyticsSocket(io, socket);

    socket.on('disconnect', () => {
      console.log(`❌ User Disconnected: ${socket.id}`);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }

  return io;
};

module.exports = {
  initializeSocket,
  getIO,
};