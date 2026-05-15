const cron = require('node-cron');

const billingJob = () => {
  cron.schedule('0 0 * * *', async () => {
    console.log('💳 Running billing cron...');

    try {
      // Billing processing logic

      console.log('✅ Billing process completed');
    } catch (error) {
      console.error(
        '❌ Billing cron error:',
        error.message
      );
    }
  });
};

module.exports = billingJob;