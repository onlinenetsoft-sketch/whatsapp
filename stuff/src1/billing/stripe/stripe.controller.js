const stripeService = require('./stripe.service');

exports.createCheckout =
  async (req, res, next) => {
    try {
      const session =
        await stripeService.createCheckoutSession(
          req.body
        );

      res.status(200).json({
        success: true,
        url: session.url,
      });
    } catch (error) {
      next(error);
    }
  };

exports.cancelSubscription =
  async (req, res, next) => {
    try {
      const subscription =
        await stripeService.cancelSubscription(
          req.params.id
        );

      res.status(200).json({
        success: true,
        data: subscription,
      });
    } catch (error) {
      next(error);
    }
  };