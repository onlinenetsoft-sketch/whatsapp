import Bull from 'bull';
  const broadcastQueue = new Bull('broadcast-queue', {
    redis: process.env.REDIS_URL
});
  export class BroadcastService {
    async queueBroadcast(data) {
      return broadcastQueue.add(data, {
        attempts: 3,
        backoff: 5000
    }); 
  }
}