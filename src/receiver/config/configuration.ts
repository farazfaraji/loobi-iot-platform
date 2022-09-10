import * as Joi from '@hapi/joi';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface ServerConfig {
  port: number;
}

interface RedisConfig {
  urls: string[];
  username?: string;
  password?: string;
}

interface SentryConfig {
  dsn: string;
  release: string;
}

interface ServicesConfig {
  [key: string]: string;
}

interface ReceiverServiceConfig {
  server: ServerConfig;
  redis: RedisConfig;
  sentry: SentryConfig;
}

export default (): ReceiverServiceConfig => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },

  redis: {
    urls: process.env.REDIS_URLS.split(','),
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    release: process.env.DD_VERSION,
  },

});

export const validationSchema = Joi.object({
  LOGGER_LEVEL: Joi.string().default('info'),
  PORT: Joi.number().default(5005),
  REDIS_URLS: Joi.string().required(),
  REDIS_USERNAME: Joi.string(),
  REDIS_PASSWORD: Joi.string(),
  JWT_SECRET: Joi.string().required(),
});
