export const checkPermission = (...permissions) => {
  return async (req, res, next) => {
    try {
      const userPermissions = req.user.role.permissions || [];

      const hasPermission = permissions.every(permission =>
        userPermissions.includes(permission)
      );

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: 'Permission denied'
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