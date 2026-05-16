import axios from 'axios';
import { webhookQueue } from '../webhook.queue.js';

webhookQueue.process(async job => {
  const { url, payload } = job.data;

  await axios.post(url, payload);

  return true;
});