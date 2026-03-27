import { Field, Float, InputType } from '@nestjs/graphql';
import { InvoiceStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateInvoiceInput {
  @Field()
  code!: string;

  @Field(() => Float)
  amount!: number;

  @Field(() => Float)
  tax!: number;

  @Field(() => Float)
  total!: number;

  @Field(() => InvoiceStatus, { defaultValue: InvoiceStatus.pending })
  status!: InvoiceStatus;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: true })
  issuedAt?: Date;

  @Field({ nullable: true })
  customerId?: string;
}
