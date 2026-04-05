import { Module } from '@nestjs/common';
import { ExpenseResolver } from './expense.resolver';
import { ExpenseService } from './expense.service';

@Module({
  providers: [ExpenseService, ExpenseResolver],
})
export class ExpenseModule {}
