import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUpdateManyWithoutRoleNestedInput } from '../user-role/user-role-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateWithoutPermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => UserRoleUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserRoleUpdateManyWithoutRoleNestedInput;
}
