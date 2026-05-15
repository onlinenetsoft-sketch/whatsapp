import prisma from '../../config/db.js';
import { analyticsQueue } from '../analytics.queue.js';

analyticsQueue.process(async job => {
  await prisma.analytics.create({
    data: job.data
  });

  return true;
});