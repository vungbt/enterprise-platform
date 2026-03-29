import { UseGuards } from '@nestjs/common';
import { Args, Mutation, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { Paginated, PaginationInput } from '../../shared/graphql/pagination.types';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';
import { CustomerEntity } from '../crm/entities/customer.entity';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { InvoiceEntity } from './entities/invoice.entity';
import { FinanceService } from './services/finance.service';

@ObjectType()
export class PaginatedInvoice extends Paginated(InvoiceEntity) {}

@Resolver(() => InvoiceEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class FinanceResolver {
  constructor(private readonly financeService: FinanceService) {}

  @Query(() => PaginatedInvoice, { name: 'invoices' })
  @CheckAbility({ action: 'read', subject: 'Invoice' })
  invoices(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.financeService.getInvoices(pagination);
  }

  @Query(() => InvoiceEntity, { name: 'invoice' })
  @CheckAbility({ action: 'read', subject: 'Invoice' })
  invoice(@Args('id') id: string) {
    return this.financeService.getInvoiceById(id);
  }

  @Mutation(() => InvoiceEntity)
  @CheckAbility({ action: 'create', subject: 'Invoice' })
  createInvoice(@Args('input') input: CreateInvoiceInput) {
    return this.financeService.createInvoice(input);
  }

  @Mutation(() => InvoiceEntity)
  @CheckAbility({ action: 'update', subject: 'Invoice' })
  updateInvoice(@Args('id') id: string, @Args('input') input: UpdateInvoiceInput) {
    return this.financeService.updateInvoice(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Invoice' })
  deleteInvoice(@Args('id') id: string) {
    return this.financeService.deleteInvoice(id);
  }

  @ResolveField(() => CustomerEntity, { nullable: true })
  customer(@Parent() invoice: InvoiceEntity) {
    if (!invoice.customerId) return null;
    return this.financeService.getCustomerForInvoice(invoice.customerId);
  }
}
