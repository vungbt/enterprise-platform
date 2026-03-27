import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  owner!: string;

  @Field()
  status!: string;
}
