import { Module } from '@nestjs/common';
import { HrResolver } from './hr.resolver';
import { HrService } from './hr.service';

@Module({
  providers: [HrService, HrResolver],
})
export class HrModule {}
