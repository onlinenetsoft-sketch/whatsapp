const onlineUsers = new Map();

module.exports = (io, socket) => {
  socket.on('user-online', (userId) => {
    onlineUsers.set(userId, socket.id);

    io.emit('presence-update', {
      userId,
      status: 'online',
    });
  });

  socket.on('get-online-users', () => {
    socket.emit('online-users-list', Array.from(onlineUsers.keys()));
  });

  socket.on('disconnect', () => {
    let disconnectedUser = null;

    for (const [userId, socketId] of onlineUsers.entries()) {
      if (socketId === socket.id) {
        disconnectedUser = userId;
        onlineUsers.delete(userId);
        break;
      }
    }

    if (disconnectedUser) {
      io.emit('presence-update', {
        userId: disconnectedUser,
        status: 'offline',
      });
    }
  });
};