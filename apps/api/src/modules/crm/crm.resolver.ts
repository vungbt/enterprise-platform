import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@api/shared/auth/current-user.decorator';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import type { DataLoaders } from '@api/shared/dataloader/dataloader.service';
import { PaginatedCustomer } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  Customer,
  CustomerUncheckedCreateInput,
  CustomerUncheckedUpdateInput,
  Invoice,
  User,
} from './crm.types';
import { CrmService } from './crm.service';

@Resolver(() => Customer)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class CrmResolver {
  constructor(private readonly crmService: CrmService) {}

  @Query(() => PaginatedCustomer, { name: 'customers' })
  @CheckAbility({ action: 'read', subject: 'Customer' })
  customers(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.crmService.getCustomers(pagination);
  }

  @Query(() => Customer, { name: 'customer' })
  @CheckAbility({ action: 'read', subject: 'Customer' })
  customer(@Args('id') id: string) {
    return this.crmService.getCustomerById(id);
  }

  @Mutation(() => Customer)
  @CheckAbility({ action: 'create', subject: 'Customer' })
  createCustomer(
    @Args('input') input: CustomerUncheckedCreateInput,
    @CurrentUser() user: { id: string },
  ) {
    return this.crmService.createCustomer({ ...input, ownerId: user.id });
  }

  @Mutation(() => Customer)
  @CheckAbility({ action: 'update', subject: 'Customer' })
  updateCustomer(@Args('id') id: string, @Args('input') input: CustomerUncheckedUpdateInput) {
    return this.crmService.updateCustomer(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Customer' })
  deleteCustomer(@Args('id') id: string) {
    return this.crmService.deleteCustomer(id);
  }

  @ResolveField(() => User)
  owner(@Parent() customer: Customer, @Context('loaders') loaders: DataLoaders) {
    return loaders.user.load(customer.ownerId);
  }

  @ResolveField(() => [Invoice])
  invoices(@Parent() customer: Customer, @Context('loaders') loaders: DataLoaders) {
    return loaders.invoicesByCustomerId.load(customer.id);
  }
}
