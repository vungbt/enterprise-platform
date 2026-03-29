import { UseGuards } from '@nestjs/common';
import { Args, Mutation, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { UserEntity } from '../../shared/entities/user.entity';
import { Paginated, PaginationInput } from '../../shared/graphql/pagination.types';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';
import { DepartmentEntity } from '../department/entities/department.entity';
import { ClubEntity } from '../sports-clubs/entities/club.entity';
import { CreateExpenseInput } from './dto/create-expense.input';
import { CreateExpenseCategoryInput } from './dto/create-expense-category.input';
import { ExpenseFilterInput } from './dto/expense-filter.input';
import { UpdateExpenseInput } from './dto/update-expense.input';
import { UpdateExpenseCategoryInput } from './dto/update-expense-category.input';
import { ExpenseEntity } from './entities/expense.entity';
import { ExpenseCategoryEntity } from './entities/expense-category.entity';
import { ExpenseService } from './services/expense.service';

@ObjectType()
export class PaginatedExpense extends Paginated(ExpenseEntity) {}

@Resolver(() => ExpenseEntity)
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

  @Query(() => ExpenseEntity, { name: 'expense' })
  @CheckAbility({ action: 'read', subject: 'Expense' })
  expense(@Args('id') id: string) {
    return this.expenseService.getExpenseById(id);
  }

  @Query(() => [ExpenseCategoryEntity], { name: 'expenseCategories' })
  @CheckAbility({ action: 'read', subject: 'ExpenseCategory' })
  expenseCategories() {
    return this.expenseService.getExpenseCategories();
  }

  @Mutation(() => ExpenseEntity)
  @CheckAbility({ action: 'create', subject: 'Expense' })
  createExpense(@Args('input') input: CreateExpenseInput) {
    return this.expenseService.createExpense(input);
  }

  @Mutation(() => ExpenseEntity)
  @CheckAbility({ action: 'update', subject: 'Expense' })
  updateExpense(@Args('id') id: string, @Args('input') input: UpdateExpenseInput) {
    return this.expenseService.updateExpense(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Expense' })
  deleteExpense(@Args('id') id: string) {
    return this.expenseService.deleteExpense(id);
  }

  @Mutation(() => ExpenseCategoryEntity)
  @CheckAbility({ action: 'create', subject: 'ExpenseCategory' })
  createExpenseCategory(@Args('input') input: CreateExpenseCategoryInput) {
    return this.expenseService.createExpenseCategory(input);
  }

  @Mutation(() => ExpenseCategoryEntity)
  @CheckAbility({ action: 'update', subject: 'ExpenseCategory' })
  updateExpenseCategory(@Args('id') id: string, @Args('input') input: UpdateExpenseCategoryInput) {
    return this.expenseService.updateExpenseCategory(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'ExpenseCategory' })
  deleteExpenseCategory(@Args('id') id: string) {
    return this.expenseService.deleteExpenseCategory(id);
  }

  @ResolveField(() => ExpenseCategoryEntity)
  category(@Parent() expense: ExpenseEntity) {
    return this.expenseService.getCategoryForExpense(expense.categoryId);
  }

  @ResolveField(() => UserEntity)
  createdBy(@Parent() expense: ExpenseEntity) {
    return this.expenseService.getCreatedByForExpense(expense.createdById);
  }

  @ResolveField(() => ClubEntity, { nullable: true })
  club(@Parent() expense: ExpenseEntity) {
    if (!expense.clubId) return null;
    return this.expenseService.getClubForExpense(expense.clubId);
  }

  @ResolveField(() => DepartmentEntity, { nullable: true })
  department(@Parent() expense: ExpenseEntity) {
    if (!expense.departmentId) return null;
    return this.expenseService.getDepartmentForExpense(expense.departmentId);
  }
}
