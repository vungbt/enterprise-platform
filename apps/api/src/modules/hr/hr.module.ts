import { Module } from '@nestjs/common';
import { HrRepository } from './repositories/hr.repository';
import { HrService } from './services/hr.service';
import { HrResolver } from './hr.resolver';

@Module({
  providers: [HrRepository, HrService, HrResolver]
})
export class HrModule {}
