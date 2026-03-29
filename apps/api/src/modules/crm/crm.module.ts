import { Module } from '@nestjs/common';
import { CrmResolver } from './crm.resolver';
import { CrmRepository } from './repositories/crm.repository';
import { CrmService } from './services/crm.service';

@Module({
  providers: [CrmRepository, CrmService, CrmResolver],
})
export class CrmModule {}
