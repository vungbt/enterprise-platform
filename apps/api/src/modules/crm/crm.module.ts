import { Module } from '@nestjs/common';
import { CrmRepository } from './repositories/crm.repository';
import { CrmService } from './services/crm.service';
import { CrmResolver } from './crm.resolver';

@Module({
  providers: [CrmRepository, CrmService, CrmResolver]
})
export class CrmModule {}
