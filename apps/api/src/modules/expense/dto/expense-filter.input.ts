import { Field, InputType } from '@nestjs/graphql';
import { ExpenseStatus } from '../../../shared/graphql/enums';

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
