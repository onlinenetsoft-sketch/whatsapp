const responseTime = require('response-time');

const performanceMiddleware = responseTime(
  (req, res, time) => {
    console.log(
      `⚡ ${req.method} ${req.originalUrl} - ${time.toFixed(2)} ms`
    );
  }
);

const memoryMonitor = () => {
  const usedMemory = process.memoryUsage();

  console.log('📊 Memory Usage:', {
    rss: `${(usedMemory.rss / 1024 / 1024).toFixed(2)} MB`,
    heapTotal: `${(usedMemory.heapTotal / 1024 / 1024).toFixed(2)} MB`,
    heapUsed: `${(usedMemory.heapUsed / 1024 / 1024).toFixed(2)} MB`,
  });
};

module.exports = {
  performanceMiddleware,
  memoryMonitor,
};