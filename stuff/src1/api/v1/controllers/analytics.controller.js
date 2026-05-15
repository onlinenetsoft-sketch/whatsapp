exports.getDashboardAnalytics = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Analytics dashboard data fetched'
  });

};