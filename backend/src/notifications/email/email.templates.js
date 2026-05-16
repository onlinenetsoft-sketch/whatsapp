exports.welcomeEmailTemplate = (
  name
) => {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h1>Welcome ${name} 👋</h1>

      <p>
        Thank you for joining our WhatsApp
        Automation Platform.
      </p>

      <p>
        Start creating campaigns, managing
        chats and automating customer support.
      </p>

      <br/>

      <p>Team WhatsAutomation</p>
    </div>
  `;
};

exports.otpEmailTemplate = (otp) => {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Your OTP Code</h2>

      <p>
        Use the following OTP to continue:
      </p>

      <h1 style="letter-spacing: 5px;">
        ${otp}
      </h1>

      <p>
        OTP valid for 10 minutes.
      </p>
    </div>
  `;
};

exports.invoiceEmailTemplate = (
  invoice
) => {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h1>Invoice Generated</h1>

      <p>
        Invoice ID:
        <strong>
          ${invoice.invoiceId}
        </strong>
      </p>

      <p>
        Amount:
        <strong>
          ₹${invoice.amount}
        </strong>
      </p>

      <p>
        Thank you for your payment.
      </p>
    </div>
  `;
};