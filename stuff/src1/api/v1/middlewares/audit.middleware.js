import prisma from '../config/prisma.js';

export const auditLogger = action => {
  return async (req, res, next) => {
    try {
      res.on('finish', async () => {
        try {
          await prisma.auditLog.create({
            data: {
              userId: req.user?.id,
              action,
              method: req.method,
              route: req.originalUrl,
              ipAddress: req.ip,
              userAgent: req.headers['user-agent'],
              statusCode: res.statusCode,
              payload: req.body
            }
          });
        } catch (error) {
          console.error('Audit log error:', error.message);
        }
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};