const moment = require('moment');

const formatDate = (
  date,
  format = 'YYYY-MM-DD HH:mm:ss'
) => {
  return moment(date).format(format);
};

const getCurrentTimestamp = () => {
  return moment().unix();
};

const addDays = (date, days) => {
  return moment(date).add(days, 'days').toDate();
};

const subtractDays = (date, days) => {
  return moment(date).subtract(days, 'days').toDate();
};

const isExpired = (date) => {
  return moment().isAfter(moment(date));
};

module.exports = {
  formatDate,
  getCurrentTimestamp,
  addDays,
  subtractDays,
  isExpired,
};