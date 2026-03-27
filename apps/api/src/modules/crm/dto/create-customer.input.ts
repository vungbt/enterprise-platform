import { Field, InputType } from '@nestjs/graphql';
import { CustomerStatus } from '../../../shared/graphql/enums';

@InputType()
export class CreateCustomerInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  company?: string;

  @Field(() => CustomerStatus, { defaultValue: CustomerStatus.active })
  status!: CustomerStatus;

  @Field()
  ownerId!: string;
}
