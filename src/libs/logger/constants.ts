import * as winston from 'winston';

export const APP_NAME = 'LOOBI_PLATFORM';
export const WINSTON_CONFIG = {
  level: global.loglevel || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
      const formattedDate = info.timestamp.replace('T', ' ').replace('Z', '');
      return `${formattedDate}|${APP_NAME}|${info.level}|${info.message};`;
    }),
  ),
  transports: [new winston.transports.Console({})],
};
