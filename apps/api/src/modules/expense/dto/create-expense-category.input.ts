import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExpenseCategoryInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;
}
