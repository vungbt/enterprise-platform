import { Module } from '@nestjs/common';
import { ExpenseRepository } from './repositories/expense.repository';
import { ExpenseService } from './services/expense.service';
import { ExpenseResolver } from './expense.resolver';

@Module({
  providers: [ExpenseRepository, ExpenseService, ExpenseResolver],
})
export class ExpenseModule {}
