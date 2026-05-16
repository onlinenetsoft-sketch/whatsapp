exports.getSubscription = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Subscription fetched successfully'
  });

};