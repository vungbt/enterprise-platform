import { Module } from '@nestjs/common';
import { ExpenseResolver } from './expense.resolver';
import { ExpenseRepository } from './repositories/expense.repository';
import { ExpenseService } from './services/expense.service';

@Module({
  providers: [ExpenseRepository, ExpenseService, ExpenseResolver],
})
export class ExpenseModule {}
