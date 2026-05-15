const cron = require('node-cron');

const campaignJob = () => {
  cron.schedule('*/10 * * * *', async () => {
    console.log('📢 Running campaign scheduler...');

    try {
      // Campaign execution logic

      console.log('✅ Campaigns processed');
    } catch (error) {
      console.error(
        '❌ Campaign cron error:',
        error.message
      );
    }
  });
};

module.exports = campaignJob;