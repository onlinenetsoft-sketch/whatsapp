exports.getNotifications = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Notifications fetched successfully'
  });

};