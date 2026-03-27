import { Query, Resolver } from '@nestjs/graphql';
import { InvoiceEntity } from './entities/invoice.entity';
import { FinanceService } from './services/finance.service';

@Resolver(() => InvoiceEntity)
export class FinanceResolver {
  constructor(private readonly financeService: FinanceService) {}

  @Query(() => [InvoiceEntity], { name: 'invoices' })
  invoices() {
    return this.financeService.getInvoices();
  }
}
