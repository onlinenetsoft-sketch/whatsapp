const { v4: uuidv4 } = require('uuid');

exports.generateInvoiceNumber = () => {
  return `INV-${uuidv4()
    .split('-')[0]
    .toUpperCase()}`;
};