const planService = require('./plan.service');

exports.createPlan =
  async (req, res, next) => {
    try {
      const plan =
        await planService.createPlan(
          req.body
        );

      res.status(201).json({
        success: true,
        data: plan,
      });
    } catch (error) {
      next(error);
    }
  };

exports.getPlans =
  async (req, res, next) => {
    try {
      const plans =
        await planService.getPlans();

      res.status(200).json({
        success: true,
        data: plans,
      });
    } catch (error) {
      next(error);
    }
  };