import Bull from 'bull';

export const webhookQueue = new Bull('webhook-queue', {
  redis: process.env.REDIS_URL
});

webhookQueue.on('completed', job => {
  console.log(`Webhook processed: ${job.id}`);
});