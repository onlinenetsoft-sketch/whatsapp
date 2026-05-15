const os = require('os');
const mongoose = require('mongoose');

const healthCheck = async (req, res) => {
  try {
    const healthData = {
      status: 'OK',
      timestamp: new Date(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      memoryUsage: process.memoryUsage(),
      cpuLoad: os.loadavg(),
      platform: os.platform(),
      database: mongoose.connection.readyState === 1
        ? 'connected'
        : 'disconnected',
    };

    return res.status(200).json({
      success: true,
      data: healthData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = healthCheck;