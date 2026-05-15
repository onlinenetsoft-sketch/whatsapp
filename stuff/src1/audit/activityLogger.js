const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logActivity = (message) => {
  const logFile = path.join(logsDir, 'activity.log');

  const log = `[${new Date().toISOString()}] ${message}\n`;

  fs.appendFileSync(logFile, log);
};

module.exports = {
  logActivity,
};