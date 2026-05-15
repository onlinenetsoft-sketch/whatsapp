import Bull from 'bull';

export const cleanupQueue = new Bull('cleanup-queue', {
  redis: process.env.REDIS_URL
});

cleanupQueue.on('completed', job => {
  console.log(`Cleanup completed: ${job.id}`);
});