import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import base from './env-config/base';
import { validate } from './env-config/env.validation';
import { archivosEnv } from './env-config/enviroments';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [base],
      validate,
      envFilePath: archivosEnv[process.env.APP_ENV] || '.env',
    }),
  ],
})
export class envModule {}
