import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { InvoiceStatus } from '../../../shared/graphql/enums';

@ObjectType()
export class InvoiceEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  code!: string;

  @Field(() => Float)
  amount!: number;

  @Field(() => Float)
  tax!: number;

  @Field(() => Float)
  total!: number;

  @Field(() => InvoiceStatus)
  status!: InvoiceStatus;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: true })
  issuedAt?: Date;

  @Field({ nullable: true })
  customerId?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
