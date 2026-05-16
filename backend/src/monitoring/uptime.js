const os = require('os');

const getUptime = () => {
  const uptimeInSeconds = process.uptime();

  const days = Math.floor(uptimeInSeconds / 86400);
  const hours = Math.floor((uptimeInSeconds % 86400) / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  return {
    serverUptime: `${days}d ${hours}h ${minutes}m ${seconds}s`,
    systemUptime: `${Math.floor(os.uptime() / 3600)} hours`,
    timestamp: new Date(),
  };
};

module.exports = {
  getUptime,
};