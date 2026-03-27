import { Field, Float, InputType } from '@nestjs/graphql';
import { ExpenseStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateExpenseInput {
  @Field()
  title!: string;

  @Field(() => Float)
  amount!: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  date!: Date;

  @Field(() => ExpenseStatus, { defaultValue: ExpenseStatus.pending })
  status!: ExpenseStatus;

  @Field()
  categoryId!: string;

  @Field()
  createdById!: string;

  @Field({ nullable: true })
  clubId?: string;

  @Field({ nullable: true })
  departmentId?: string;
}
