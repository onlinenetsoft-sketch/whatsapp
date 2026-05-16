export class NotificationService {
    async send(data) {
      console.log('Notification sent:', data);
      return true;
 }
}