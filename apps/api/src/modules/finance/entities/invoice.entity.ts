import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InvoiceEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  code!: string;

  @Field(() => Float)
  amount!: number;

  @Field()
  status!: string;
}
