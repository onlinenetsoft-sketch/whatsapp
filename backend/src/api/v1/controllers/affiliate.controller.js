exports.getAffiliateDashboard = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Affiliate dashboard fetched'
  });

};