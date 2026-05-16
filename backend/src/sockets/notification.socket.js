module.exports = (io, socket) => {
  socket.on('join-notification-room', (userId) => {
    socket.join(`notifications:${userId}`);

    socket.emit('notification-room-joined', {
      success: true,
    });
  });

  socket.on('send-notification', (payload) => {
    const notification = {
      title: payload.title,
      message: payload.message,
      type: payload.type || 'info',
      createdAt: new Date(),
    };

    io.to(`notifications:${payload.userId}`).emit(
      'new-notification',
      notification
    );
  });

  socket.on('mark-notification-read', (notificationId) => {
    socket.emit('notification-read-success', {
      notificationId,
    });
  });
};