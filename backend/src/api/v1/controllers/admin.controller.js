exports.getAdminDashboard = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Admin dashboard fetched successfully'
  });

};