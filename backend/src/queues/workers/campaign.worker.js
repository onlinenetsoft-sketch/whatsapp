import { campaignQueue } from '../campaign.queue.js';

campaignQueue.process(async job => {
  console.log('Processing campaign:', job.data);

  return true;
});