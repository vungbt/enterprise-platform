import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionUncheckedUpdateManyWithoutRoleNestedInput } from '../role-permission/role-permission-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => RolePermissionUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
}
