import {
  Inject,
  Injectable,
  LoggerService as NestLoggerService,
  Scope,
} from '@nestjs/common';
import * as winston from 'winston';
import { Logger as WinstonLogger, createLogger, Logger } from 'winston';
import { APP_NAME, WINSTON_CONFIG } from './constants';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements NestLoggerService {
  context: string;
  constructor(
    @Inject('winston')
    private readonly logger: WinstonLogger,
  ) {
    this.logger = createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((info) => {
          console.log({ info });
          const formattedDate = info.timestamp
            .replace('T', ' ')
            .replace('Z', '');
          return `[${
            this.context
          }] - ${formattedDate}   ${info.level.toUpperCase()} ${info.message}`;
        }),
      ),
      transports: [new winston.transports.Console({})],
    });

    this.context = 'WithoutContext';
  }

  setContext(context: string) {
    this.context = context;
  }

  verbose(message: any, ...meta: any[]): void {
    this.logger.debug(LoggerService.Formatter(message, meta));
  }

  debug(message: any, ...meta: any[]): void {
    this.logger.debug(LoggerService.Formatter(message, meta));
  }

  log(message: any, ...meta: any[]): void {
    this.logger.debug(LoggerService.Formatter(message, meta));
  }

  warn(message: any, ...meta: any[]): void {
    this.logger.debug(LoggerService.Formatter(message, meta));
  }

  error(message: any, ...meta: any[]): void {
    this.logger.debug(LoggerService.Formatter(message, meta));
  }

  static Formatter(message: string, meta: any) {
    return `${message}: ${JSON.stringify(meta)}`;
  }
}
