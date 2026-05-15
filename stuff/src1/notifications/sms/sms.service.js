const twilioClient = require(
  './twilio.config'
);

class SMSService {
  async sendSMS(to, message) {
    return await twilioClient.messages.create(
      {
        body: message,

        from:
          process.env.TWILIO_PHONE_NUMBER,

        to,
      }
    );
  }

  async sendOTP(to, otp) {
    return await this.sendSMS(
      to,
      `Your OTP code is ${otp}`
    );
  }
}

module.exports = new SMSService();