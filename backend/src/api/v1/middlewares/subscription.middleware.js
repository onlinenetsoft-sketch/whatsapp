export const checkSubscription = (...plans) => {
  return async (req, res, next) => {
    try {
      const subscription = req.user.subscription;

      if (!subscription) {
        return res.status(403).json({
          success: false,
          message: 'No active subscription found'
        });
      }

      if (subscription.status !== 'ACTIVE') {
        return res.status(403).json({
          success: false,
          message: 'Subscription inactive'
        });
      }

      if (!plans.includes(subscription.plan)) {
        return res.status(403).json({
          success: false,
          message: 'Upgrade subscription to access this feature'
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
};