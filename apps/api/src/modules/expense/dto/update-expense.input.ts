import { Field, Float, InputType } from '@nestjs/graphql';
import { ExpenseStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateExpenseInput {
  @Field({ nullable: true })
  title?: string;

  @Field(() => Float, { nullable: true })
  amount?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  date?: Date;

  @Field(() => ExpenseStatus, { nullable: true })
  status?: ExpenseStatus;

  @Field({ nullable: true })
  categoryId?: string;

  @Field({ nullable: true })
  clubId?: string;

  @Field({ nullable: true })
  departmentId?: string;
}
