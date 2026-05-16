const cron = require('node-cron');

const analyticsJob = () => {
  cron.schedule('*/30 * * * *', async () => {
    console.log('📊 Running analytics cron...');

    try {
      // Analytics aggregation logic

      console.log('✅ Analytics updated');
    } catch (error) {
      console.error(
        '❌ Analytics cron error:',
        error.message
      );
    }
  });
};

module.exports = analyticsJob;