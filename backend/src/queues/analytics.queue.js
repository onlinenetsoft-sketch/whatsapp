import Bull from 'bull';

export const analyticsQueue = new Bull('analytics-queue', {
  redis: process.env.REDIS_URL
});

analyticsQueue.on('completed', job => {
  console.log(`Analytics processed: ${job.id}`);
});