const { logActivity } = require('./activityLogger');

const createAuditLog = async ({
  userId,
  action,
  metadata = {},
}) => {
  try {
    const payload = {
      userId,
      action,
      metadata,
      timestamp: new Date(),
    };

    logActivity(JSON.stringify(payload));

    return payload;
  } catch (error) {
    console.error('Audit Error:', error.message);
  }
};

module.exports = {
  createAuditLog,
};