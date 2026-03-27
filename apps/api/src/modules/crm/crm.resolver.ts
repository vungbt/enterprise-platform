import { Query, Resolver } from '@nestjs/graphql';
import { CustomerEntity } from './entities/customer.entity';
import { CrmService } from './services/crm.service';

@Resolver(() => CustomerEntity)
export class CrmResolver {
  constructor(private readonly crmService: CrmService) {}

  @Query(() => [CustomerEntity], { name: 'customers' })
  customers() {
    return this.crmService.getCustomers();
  }
}
