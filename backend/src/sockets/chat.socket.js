module.exports = (io, socket) => {
  socket.on('join-chat', (conversationId) => {
    socket.join(`chat:${conversationId}`);

    socket.emit('joined-chat', {
      conversationId,
      message: 'Joined chat room successfully',
    });
  });

  socket.on('leave-chat', (conversationId) => {
    socket.leave(`chat:${conversationId}`);

    socket.emit('left-chat', {
      conversationId,
    });
  });

  socket.on('send-message', async (payload) => {
    try {
      const messageData = {
        senderId: payload.senderId,
        receiverId: payload.receiverId,
        conversationId: payload.conversationId,
        message: payload.message,
        type: payload.type || 'text',
        createdAt: new Date(),
      };

      io.to(`chat:${payload.conversationId}`).emit(
        'receive-message',
        messageData
      );

      socket.emit('message-sent', {
        success: true,
      });
    } catch (error) {
      socket.emit('message-error', {
        success: false,
        error: error.message,
      });
    }
  });

  socket.on('typing', ({ conversationId, userId }) => {
    socket.to(`chat:${conversationId}`).emit('user-typing', {
      userId,
    });
  });

  socket.on('stop-typing', ({ conversationId, userId }) => {
    socket.to(`chat:${conversationId}`).emit('user-stop-typing', {
      userId,
    });
  });
};