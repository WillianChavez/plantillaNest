import { Module } from '@nestjs/common';
import { envModule } from './config/env.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [envModule],
})
export class CommonModule {}
