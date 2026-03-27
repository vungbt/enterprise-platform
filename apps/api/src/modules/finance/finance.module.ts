import { Module } from '@nestjs/common';
import { FinanceRepository } from './repositories/finance.repository';
import { FinanceService } from './services/finance.service';
import { FinanceResolver } from './finance.resolver';

@Module({
  providers: [FinanceRepository, FinanceService, FinanceResolver]
})
export class FinanceModule {}
