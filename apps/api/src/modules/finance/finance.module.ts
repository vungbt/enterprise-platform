import { Module } from '@nestjs/common';
import { FinanceResolver } from './finance.resolver';
import { FinanceRepository } from './repositories/finance.repository';
import { FinanceService } from './services/finance.service';

@Module({
  providers: [FinanceRepository, FinanceService, FinanceResolver],
})
export class FinanceModule {}
