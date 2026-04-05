import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleCreateManyRoleInput {

    @Field(() => String, {nullable:false})
    userId!: string;
}
