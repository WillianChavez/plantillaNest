import { Module } from '@nestjs/common';
import { envModule } from './config/env.module';

@Module({
  imports: [envModule],
})
export class CommonModule {}
