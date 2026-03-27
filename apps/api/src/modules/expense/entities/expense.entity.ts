import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { ExpenseStatus } from '../../../shared/graphql/enums';

@ObjectType()
export class ExpenseEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field(() => Float)
  amount!: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  date!: Date;

  @Field(() => ExpenseStatus)
  status!: ExpenseStatus;

  @Field()
  categoryId!: string;

  @Field()
  createdById!: string;

  @Field({ nullable: true })
  clubId?: string;

  @Field({ nullable: true })
  departmentId?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
