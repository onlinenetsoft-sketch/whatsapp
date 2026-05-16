const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
};

const comparePassword = async (
  enteredPassword,
  hashedPassword
) => {
  return bcrypt.compare(enteredPassword, hashedPassword);
};

const encryptText = (text) => {
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.ENCRYPTION_KEY, 'hex'),
    Buffer.from(process.env.ENCRYPTION_IV, 'hex')
  );

  let encrypted = cipher.update(text, 'utf8', 'hex');

  encrypted += cipher.final('hex');

  return encrypted;
};

const decryptText = (encryptedText) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.ENCRYPTION_KEY, 'hex'),
    Buffer.from(process.env.ENCRYPTION_IV, 'hex')
  );

  let decrypted = decipher.update(
    encryptedText,
    'hex',
    'utf8'
  );

  decrypted += decipher.final('utf8');

  return decrypted;
};

module.exports = {
  hashPassword,
  comparePassword,
  encryptText,
  decryptText,
};