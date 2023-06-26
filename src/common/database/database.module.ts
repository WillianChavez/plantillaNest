import { Module } from '@nestjs/common';
import { EnvConfigService } from '../config/services/env-config.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: async (envConfig: EnvConfigService) => ({
        dialect: envConfig.variables.db.dialect,
        host: envConfig.variables.db.host,
        port: envConfig.variables.db.port,
        username: envConfig.variables.db.username,
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [EnvConfigService],
    }),
  ],
})
export class DatabaseModule {}
