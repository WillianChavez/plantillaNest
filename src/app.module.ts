import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { envModule } from './common/config/env.module';

@Module({
  imports: [CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
