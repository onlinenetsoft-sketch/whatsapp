import Bull from 'bull';

export const retryQueue = new Bull('retry-queue', {
  redis: process.env.REDIS_URL
});

retryQueue.on('failed', (job, err) => {
  console.error(`Retry failed: ${job.id}`, err.message);
});