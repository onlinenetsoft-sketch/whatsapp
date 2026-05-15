import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';

export const sanitizeRequest = [
  mongoSanitize(),
  xss(),
  hpp()
];