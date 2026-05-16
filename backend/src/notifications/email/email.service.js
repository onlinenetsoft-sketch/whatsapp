const transporter = require(
  './nodemailer.config'
);

const {
  welcomeEmailTemplate,
  otpEmailTemplate,
  invoiceEmailTemplate,
} = require('./email.templates');

class EmailService {
  async sendEmail({
    to,
    subject,
    html,
  }) {
    return await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        'no-reply@whatsautomation.com',

      to,

      subject,

      html,
    });
  }

  async sendWelcomeEmail(
    email,
    name
  ) {
    return await this.sendEmail({
      to: email,

      subject:
        'Welcome to WhatsAutomation',

      html: welcomeEmailTemplate(name),
    });
  }

  async sendOTP(email, otp) {
    return await this.sendEmail({
      to: email,

      subject: 'Your OTP Code',

      html: otpEmailTemplate(otp),
    });
  }

  async sendInvoiceEmail(
    email,
    invoice
  ) {
    return await this.sendEmail({
      to: email,

      subject: 'Invoice Receipt',

      html: invoiceEmailTemplate(
        invoice
      ),
    });
  }
}

module.exports = new EmailService();