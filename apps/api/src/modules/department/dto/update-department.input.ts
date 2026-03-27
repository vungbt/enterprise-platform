import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateDepartmentInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  parentId?: string;
}
