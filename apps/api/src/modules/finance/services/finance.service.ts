import { Injectable } from '@nestjs/common';
import { FinanceRepository } from '../repositories/finance.repository';

@Injectable()
export class FinanceService {
  constructor(private readonly financeRepository: FinanceRepository) {}

  getInvoices() {
    return this.financeRepository.findInvoices();
  }
}
