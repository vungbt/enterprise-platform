import { Field, InputType } from '@nestjs/graphql';
import { CustomerStatus } from '../../../shared/graphql/enums';

@InputType()
export class UpdateCustomerInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  company?: string;

  @Field(() => CustomerStatus, { nullable: true })
  status?: CustomerStatus;

  @Field({ nullable: true })
  ownerId?: string;
}
