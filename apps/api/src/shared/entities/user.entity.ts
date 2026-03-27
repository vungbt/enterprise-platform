import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  isActive!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
