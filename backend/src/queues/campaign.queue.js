import Bull from 'bull';

export const campaignQueue = new Bull('campaign-queue', {
  redis: process.env.REDIS_URL
});

campaignQueue.on('completed', job => {
  console.log(`Campaign completed: ${job.id}`);
});