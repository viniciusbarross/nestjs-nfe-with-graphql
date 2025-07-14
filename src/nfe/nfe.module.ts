import { Module } from '@nestjs/common';
import { NfeService } from './nfe.service';
import { NfeResolver } from './nfe.resolver';

@Module({
  providers: [NfeService, NfeResolver]
})
export class NfeModule {}
