import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import { PaginatedInvoice } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  Customer,
  Invoice,
  InvoiceUncheckedCreateInput,
  InvoiceUncheckedUpdateInput,
} from './finance.types';
import { FinanceService } from './finance.service';

@Resolver(() => Invoice)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class FinanceResolver {
  constructor(private readonly financeService: FinanceService) {}

  @Query(() => PaginatedInvoice, { name: 'invoices' })
  @CheckAbility({ action: 'read', subject: 'Invoice' })
  invoices(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.financeService.getInvoices(pagination);
  }

  @Query(() => Invoice, { name: 'invoice' })
  @CheckAbility({ action: 'read', subject: 'Invoice' })
  invoice(@Args('id') id: string) {
    return this.financeService.getInvoiceById(id);
  }

  @Mutation(() => Invoice)
  @CheckAbility({ action: 'create', subject: 'Invoice' })
  createInvoice(@Args('input') input: InvoiceUncheckedCreateInput) {
    return this.financeService.createInvoice(input);
  }

  @Mutation(() => Invoice)
  @CheckAbility({ action: 'update', subject: 'Invoice' })
  updateInvoice(
    @Args('id') id: string,
    @Args('input') input: InvoiceUncheckedUpdateInput,
  ) {
    return this.financeService.updateInvoice(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Invoice' })
  deleteInvoice(@Args('id') id: string) {
    return this.financeService.deleteInvoice(id);
  }

  @ResolveField(() => Customer, { nullable: true })
  customer(@Parent() invoice: Invoice) {
    if (!invoice.customerId) return null;
    return this.financeService.getCustomerForInvoice(invoice.customerId);
  }
}
