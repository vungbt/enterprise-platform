import {
  Args,
  Mutation,
  ObjectType,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CustomerEntity } from './entities/customer.entity';
import { CrmService } from './services/crm.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import {
  Paginated,
  PaginationInput,
} from '../../shared/graphql/pagination.types';
import { UserEntity } from '../../shared/entities/user.entity';
import { InvoiceEntity } from '../finance/entities/invoice.entity';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';

@ObjectType()
export class PaginatedCustomer extends Paginated(CustomerEntity) {}

@Resolver(() => CustomerEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class CrmResolver {
  constructor(private readonly crmService: CrmService) {}

  @Query(() => PaginatedCustomer, { name: 'customers' })
  @CheckAbility({ action: 'read', subject: 'Customer' })
  customers(
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ) {
    return this.crmService.getCustomers(pagination);
  }

  @Query(() => CustomerEntity, { name: 'customer' })
  @CheckAbility({ action: 'read', subject: 'Customer' })
  customer(@Args('id') id: string) {
    return this.crmService.getCustomerById(id);
  }

  @Mutation(() => CustomerEntity)
  @CheckAbility({ action: 'create', subject: 'Customer' })
  createCustomer(@Args('input') input: CreateCustomerInput) {
    return this.crmService.createCustomer(input);
  }

  @Mutation(() => CustomerEntity)
  @CheckAbility({ action: 'update', subject: 'Customer' })
  updateCustomer(
    @Args('id') id: string,
    @Args('input') input: UpdateCustomerInput,
  ) {
    return this.crmService.updateCustomer(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Customer' })
  deleteCustomer(@Args('id') id: string) {
    return this.crmService.deleteCustomer(id);
  }

  @ResolveField(() => UserEntity)
  owner(@Parent() customer: CustomerEntity) {
    return this.crmService.getOwnerForCustomer(customer.ownerId);
  }

  @ResolveField(() => [InvoiceEntity])
  invoices(@Parent() customer: CustomerEntity) {
    return this.crmService.getInvoicesForCustomer(customer.id);
  }
}
