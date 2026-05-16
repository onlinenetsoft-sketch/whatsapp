const redis = require('./redisCache');

const setSession = async (key, value, expiry = 3600) => {
  await redis.set(key, JSON.stringify(value), 'EX', expiry);
};

const getSession = async (key) => {
  const data = await redis.get(key);

  return data ? JSON.parse(data) : null;
};

const deleteSession = async (key) => {
  await redis.del(key);
};

module.exports = {
  setSession,
  getSession,
  deleteSession,
};