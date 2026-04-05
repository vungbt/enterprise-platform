/**
 * Expense GraphQL surface.
 * - Lists query filters are hand-written (generated `ExpenseWhereInput` is huge).
 * - Add more custom inputs / payloads next to `ExpenseFilterInput` below.
 */
import { Field, InputType } from '@nestjs/graphql';
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
export class ExpenseFilterInput {
  @Field({ nullable: true })
  clubId?: string;

  @Field({ nullable: true })
  departmentId?: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field(() => ExpenseStatus, { nullable: true })
  status?: ExpenseStatus;
}
