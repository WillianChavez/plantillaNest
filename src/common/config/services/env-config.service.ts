import { Injectable, Inject } from '@nestjs/common';
import base from '../env-config/base';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class EnvConfigService {
  constructor(@Inject(base.KEY) public variables: ConfigType<typeof base>) {}
}
