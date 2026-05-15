import Bull from 'bull';

export const notificationQueue = new Bull('notification-queue', {
  redis: process.env.REDIS_URL
});

notificationQueue.on('completed', job => {
  console.log(`Notification sent: ${job.id}`);
});