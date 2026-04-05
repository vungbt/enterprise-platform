import { Module } from '@nestjs/common';
import { FinanceResolver } from './finance.resolver';
import { FinanceService } from './finance.service';

@Module({
  providers: [FinanceService, FinanceResolver],
})
export class FinanceModule {}
