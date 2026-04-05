import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionUncheckedUpdateManyWithoutRoleNestedInput } from '../role-permission/role-permission-unchecked-update-many-without-role-nested.input';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInput } from '../user-role/user-role-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => RolePermissionUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput;
}
