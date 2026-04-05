import { Module } from '@nestjs/common';
import { CrmResolver } from './crm.resolver';
import { CrmService } from './crm.service';

@Module({
  providers: [CrmService, CrmResolver],
})
export class CrmModule {}
