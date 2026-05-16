export const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized access'
        });
      }

      if (!roles.includes(req.user.role.name)) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient role permissions'
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