export const validate = schema => {
  return async (req, res, next) => {
    try {
      const data = {
        body: req.body,
        query: req.query,
        params: req.params
      };

      const validated = await schema.validateAsync(data, {
        abortEarly: false,
        stripUnknown: true
      });

      req.body = validated.body;
      req.query = validated.query;
      req.params = validated.params;

      next();
    } catch (error) {
      return res.status(422).json({
        success: false,
        message: 'Validation failed',
        errors: error.details.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    }
  };
};