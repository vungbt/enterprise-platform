import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CustomerStatus } from '../../../shared/graphql/enums';

@ObjectType()
export class CustomerEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  company?: string;

  @Field(() => CustomerStatus)
  status!: CustomerStatus;

  @Field()
  ownerId!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
