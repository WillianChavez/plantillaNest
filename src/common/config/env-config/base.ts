import { registerAs } from '@nestjs/config';

export default registerAs('', () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  appEnv: process.env.APP_ENV,
  secretKey: process.env.SECRET_KEY,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    logger: process.env.DB_LOGGER,
  },

  appDebug: process.env.DB_DIALECT,
}));
