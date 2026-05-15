const validateSubscription = (req, res, next) => {

  const { plan } = req.body;

  if (!plan) {

    return res.status(400).json({
      success: false,
      message: 'Subscription plan is required'
    });

  }

  next();
};

module.exports = {
  validateSubscription
};