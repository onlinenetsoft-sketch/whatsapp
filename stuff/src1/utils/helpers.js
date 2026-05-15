const crypto = require('crypto');

const generateRandomString = (length = 16) => {
  return crypto
    .randomBytes(length)
    .toString('hex')
    .slice(0, length);
};

const generateOTP = (length = 6) => {
  let otp = '';

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
};

module.exports = {
  generateRandomString,
  generateOTP,
  slugify,
  capitalize,
  sleep,
};