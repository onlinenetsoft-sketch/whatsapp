const fs = require('fs');
const path = require('path');

class InvoiceService {
  async generateInvoice(data) {
    const invoiceContent = `
Invoice ID: ${data.invoiceId}

Customer: ${data.customer}

Plan: ${data.plan}

Amount: ₹${data.amount}

Date: ${new Date().toLocaleDateString()}
`;

    const filePath = path.join(
      __dirname,
      `${data.invoiceId}.txt`
    );

    fs.writeFileSync(
      filePath,
      invoiceContent
    );

    return filePath;
  }
}

module.exports = new InvoiceService();