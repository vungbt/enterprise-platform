import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  parentId?: string;
}
