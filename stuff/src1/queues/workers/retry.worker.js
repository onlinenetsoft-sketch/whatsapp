import { retryQueue } from '../retry.queue.js';

retryQueue.process(async job => {
  console.log('Retrying failed task:', job.data);

  return true;
});