import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  parentId?: string;
}
