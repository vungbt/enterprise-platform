import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleUncheckedUpdateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    userId?: string;
}
