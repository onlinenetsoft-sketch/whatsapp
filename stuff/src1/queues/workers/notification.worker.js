import { notificationQueue } from '../notification.queue.js';
import { EmailService } from '../../services/email.service.js';

const emailService = new EmailService();

notificationQueue.process(async job => {
  const { to, subject, html } = job.data;

  await emailService.sendMail({
    to,
    subject,
    html
  });

  return true;
});