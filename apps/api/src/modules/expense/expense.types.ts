import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BaseFilterInput } from '@api/shared/graphql/base-filter.types';
import { ExpenseStatus } from '@/prisma/graphql/prisma/expense-status.enum';

export {
  Club,
  Department,
  Expense,
  ExpenseCategory,
  ExpenseCategoryUncheckedCreateInput,
  ExpenseCategoryUncheckedUpdateInput,
  ExpenseUncheckedCreateInput,
  ExpenseUncheckedUpdateInput,
  User,
} from '@/prisma/graphql';

@InputType()
export class ExpenseFilterInput extends BaseFilterInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @Field(() => ExpenseStatus, { nullable: true })
  @IsOptional()
  @IsEnum(ExpenseStatus)
  status?: ExpenseStatus;
}
