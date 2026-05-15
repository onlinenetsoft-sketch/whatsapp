const cron = require('node-cron');

const redis = require('../../config/redis');

cron.schedule('0 0 1 * *', async () => {
  console.log(
    'Resetting monthly usage tracking...'
  );

  const keys = await redis.keys('usage:*');

  for (const key of keys) {
    await redis.del(key);
  }

  console.log(
    'Monthly usage reset completed.'
  );
});