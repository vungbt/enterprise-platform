import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleCreateManyUserInput {

    @Field(() => String, {nullable:false})
    roleId!: string;
}
