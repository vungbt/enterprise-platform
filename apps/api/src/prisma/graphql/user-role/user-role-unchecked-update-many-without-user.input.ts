import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleUncheckedUpdateManyWithoutUserInput {

    @Field(() => String, {nullable:true})
    roleId?: string;
}
