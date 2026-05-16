const usageService = require(
  './usage.service'
);

module.exports = async (
  req,
  res,
  next
) => {
  try {
    await usageService.incrementUsage(
      req.user.id
    );

    next();
  } catch (error) {
    next(error);
  }
};