export class SmsService {
    async sendSms(phone, message) {
      console.log(`SMS sent to ${phone}: ${message}`);
      return true;
  }
}