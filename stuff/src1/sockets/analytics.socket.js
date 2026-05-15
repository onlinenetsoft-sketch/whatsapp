module.exports = (io, socket) => {
  socket.on('track-event', (payload) => {
    const analyticsData = {
      event: payload.event,
      userId: payload.userId,
      metadata: payload.metadata || {},
      timestamp: new Date(),
    };

    console.log('📊 Analytics Event:', analyticsData);

    io.emit('analytics-update', analyticsData);
  });

  socket.on('dashboard-join', () => {
    socket.join('analytics-dashboard');

    socket.emit('dashboard-connected', {
      success: true,
    });
  });

  socket.on('broadcast-stats', (stats) => {
    io.to('analytics-dashboard').emit('stats-update', stats);
  });
};