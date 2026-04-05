import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@api/shared/auth/current-user.decorator';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import type { DataLoaders } from '@api/shared/dataloader/dataloader.service';
import { PaginatedExpense } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  Club,
  Department,
  Expense,
  ExpenseCategory,
  ExpenseCategoryUncheckedCreateInput,
  ExpenseCategoryUncheckedUpdateInput,
  ExpenseFilterInput,
  ExpenseUncheckedCreateInput,
  ExpenseUncheckedUpdateInput,
  User,
} from './expense.types';
import { ExpenseService } from './expense.service';

@Resolver(() => Expense)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  @Query(() => PaginatedExpense, { name: 'expenses' })
  @CheckAbility({ action: 'read', subject: 'Expense' })
  expenses(
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
    @Args('filter', { nullable: true }) filter?: ExpenseFilterInput,
  ) {
    return this.expenseService.getExpenses(pagination, filter);
  }

  @Query(() => Expense, { name: 'expense' })
  @CheckAbility({ action: 'read', subject: 'Expense' })
  expense(@Args('id') id: string) {
    return this.expenseService.getExpenseById(id);
  }

  @Query(() => [ExpenseCategory], { name: 'expenseCategories' })
  @CheckAbility({ action: 'read', subject: 'ExpenseCategory' })
  expenseCategories() {
    return this.expenseService.getExpenseCategories();
  }

  @Mutation(() => Expense)
  @CheckAbility({ action: 'create', subject: 'Expense' })
  createExpense(
    @Args('input') input: ExpenseUncheckedCreateInput,
    @CurrentUser() user: { id: string },
  ) {
    return this.expenseService.createExpense({ ...input, createdById: user.id });
  }

  @Mutation(() => Expense)
  @CheckAbility({ action: 'update', subject: 'Expense' })
  updateExpense(@Args('id') id: string, @Args('input') input: ExpenseUncheckedUpdateInput) {
    return this.expenseService.updateExpense(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Expense' })
  deleteExpense(@Args('id') id: string) {
    return this.expenseService.deleteExpense(id);
  }

  @Mutation(() => ExpenseCategory)
  @CheckAbility({ action: 'create', subject: 'ExpenseCategory' })
  createExpenseCategory(@Args('input') input: ExpenseCategoryUncheckedCreateInput) {
    return this.expenseService.createExpenseCategory(input);
  }

  @Mutation(() => ExpenseCategory)
  @CheckAbility({ action: 'update', subject: 'ExpenseCategory' })
  updateExpenseCategory(
    @Args('id') id: string,
    @Args('input') input: ExpenseCategoryUncheckedUpdateInput,
  ) {
    return this.expenseService.updateExpenseCategory(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'ExpenseCategory' })
  deleteExpenseCategory(@Args('id') id: string) {
    return this.expenseService.deleteExpenseCategory(id);
  }

  @ResolveField(() => ExpenseCategory)
  category(@Parent() expense: Expense, @Context('loaders') loaders: DataLoaders) {
    return loaders.expenseCategory.load(expense.categoryId);
  }

  @ResolveField(() => User)
  createdBy(@Parent() expense: Expense, @Context('loaders') loaders: DataLoaders) {
    return loaders.user.load(expense.createdById);
  }

  @ResolveField(() => Club, { nullable: true })
  club(@Parent() expense: Expense, @Context('loaders') loaders: DataLoaders) {
    if (!expense.clubId) return null;
    return loaders.club.load(expense.clubId);
  }

  @ResolveField(() => Department, { nullable: true })
  department(@Parent() expense: Expense, @Context('loaders') loaders: DataLoaders) {
    if (!expense.departmentId) return null;
    return loaders.department.load(expense.departmentId);
  }
}
