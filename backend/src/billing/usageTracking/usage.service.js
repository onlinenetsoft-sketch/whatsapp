const redis = require('../../config/redis');

class UsageService {
  async incrementUsage(
    userId,
    type = 'messages'
  ) {
    const key = `usage:${userId}:${type}`;

    await redis.incr(key);

    await redis.expire(
      key,
      60 * 60 * 24 * 30
    );
  }

  async getUsage(
    userId,
    type = 'messages'
  ) {
    const key = `usage:${userId}:${type}`;

    return await redis.get(key);
  }
}

module.exports = new UsageService();