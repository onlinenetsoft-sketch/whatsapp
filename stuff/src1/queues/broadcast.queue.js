import Bull from 'bull';

export const broadcastQueue = new Bull('broadcast-queue', {
  redis: process.env.REDIS_URL
});

broadcastQueue.on('completed', job => {
  console.log(`Broadcast job completed: ${job.id}`);
});

broadcastQueue.on('failed', (job, err) => {
  console.error(`Broadcast job failed: ${job.id}`, err.message);
});