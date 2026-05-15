const cron = require('node-cron');

const cleanupJob = () => {
  cron.schedule('0 2 * * *', async () => {
    console.log('🧹 Running cleanup cron job...');

    try {
      // Cleanup logic here

      console.log('✅ Cleanup completed');
    } catch (error) {
      console.error(
        '❌ Cleanup cron error:',
        error.message
      );
    }
  });
};

module.exports = cleanupJob;