import * as Joi from '@hapi/joi';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function convertStringOfKeyValuesToObject(keyValues: string) {
  if (!keyValues || keyValues.length === 0) {
    return {};
  }
  return keyValues.split(',').reduce((object, current) => {
    const [key, value] = current.split('::');
    if (key && value) {
      object[key] = value;
    }
    return object;
  }, {});
}

interface ServerConfig {
  port: number;
}

interface OpenApiConfig {
  enabled: boolean;
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
  typeorm: TypeOrmModuleOptions;
  globalTypeorm: TypeOrmModuleOptions;
  redis: RedisConfig;
  sentry: SentryConfig;
  services: ServicesConfig;
}

export default (): ReceiverServiceConfig => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  typeorm: {
    type: process.env.RDB_CONNECTION as 'postgres' | 'mysql',
    replication: {
      master: {
        url: process.env.RDB_REGIONAL_MASTER_URL,
      },
      slaves: process.env.RDB_REGIONAL_SLAVE_URLS.split(',').map((url) => ({
        url,
      })),
    },
    logging: JSON.parse(process.env.RDB_LOGGING),
  },
  globalTypeorm: {
    type: process.env.RDB_CONNECTION as 'postgres' | 'mysql',
    replication: {
      master: {
        url: process.env.RDB_GLOBAL_MASTER_URL,
      },
      slaves: process.env.RDB_GLOBAL_SLAVE_URLS.split(',').map((url) => ({
        url,
      })),
    },
    logging: JSON.parse(process.env.RDB_LOGGING),
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
  services: {
    media: process.env.MEDIA_SERVICE,
    space: process.env.SPACE_SERVICE,
    post: process.env.POST_SERVICE,
    network: process.env.NETWORK_SERVICE,
    nativeApp: process.env.NATIVE_APP_SERVICE,
  },
});

export const validationSchema = Joi.object({
  LOGGER_LEVEL: Joi.string().default('info'),
  LOGGER_PRETTY_PRINT: Joi.boolean().default(false),
  OVERRIDE_TYPEORM_LOGGER: Joi.boolean().default(true),
  RDB_CONNECTION: Joi.string()
    .only()
    .allow('postgres', 'mysql')
    .default('postgres'),
  RDB_REGIONAL_MASTER_URL: Joi.string().required(),
  RDB_REGIONAL_SLAVE_URLS: Joi.string().required(),
  RDB_GLOBAL_MASTER_URL: Joi.string().required(),
  RDB_GLOBAL_SLAVE_URLS: Joi.string().required(),
  RDB_LOGGING: Joi.string().required(),
  PORT: Joi.number().default(5005),
  QUEUE_PREFIX: Joi.string(),
  QUEUE_CONSUME_ON_START: Joi.boolean().default(false),
  REDIS_URLS: Joi.string().required(),
  REDIS_USERNAME: Joi.string(),
  REDIS_PASSWORD: Joi.string(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('1h'),
  GLOBAL_JWT_SECRET: Joi.string().required(),
  APP_SECRET: Joi.string().required(),
  OPENAPI_DOCS_ENABLED: Joi.bool().default(false),
  SENTRY_DSN: Joi.string().optional(),
  DD_VERSION: Joi.string().optional(),
  SPACE_SERVICE: Joi.string().required(),
  NETWORK_SERVICE: Joi.string().required(),
  NATIVE_APP_SERVICE: Joi.string().required(),
  POST_SERVICE: Joi.string().required(),
  MEDIA_SERVICE: Joi.string().required(),
});
