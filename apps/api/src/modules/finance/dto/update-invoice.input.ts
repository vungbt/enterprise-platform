import { Field, Float, InputType } from '@nestjs/graphql';
import { InvoiceStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateInvoiceInput {
  @Field({ nullable: true })
  code?: string;

  @Field(() => Float, { nullable: true })
  amount?: number;

  @Field(() => Float, { nullable: true })
  tax?: number;

  @Field(() => Float, { nullable: true })
  total?: number;

  @Field(() => InvoiceStatus, { nullable: true })
  status?: InvoiceStatus;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: true })
  issuedAt?: Date;

  @Field({ nullable: true })
  customerId?: string;
}
