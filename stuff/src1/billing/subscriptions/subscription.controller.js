const subscriptionService = require(
  './subscription.service'
);

exports.createSubscription =
  async (req, res, next) => {
    try {
      const subscription =
        await subscriptionService.createSubscription(
          req.body
        );

      res.status(201).json({
        success: true,
        data: subscription,
      });
    } catch (error) {
      next(error);
    }
  };

exports.getSubscription =
  async (req, res, next) => {
    try {
      const subscription =
        await subscriptionService.getUserSubscription(
          req.user.id
        );

      res.status(200).json({
        success: true,
        data: subscription,
      });
    } catch (error) {
      next(error);
    }
  };