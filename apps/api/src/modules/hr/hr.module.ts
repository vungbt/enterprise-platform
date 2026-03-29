import { Module } from '@nestjs/common';
import { HrResolver } from './hr.resolver';
import { HrRepository } from './repositories/hr.repository';
import { HrService } from './services/hr.service';

@Module({
  providers: [HrRepository, HrService, HrResolver],
})
export class HrModule {}
