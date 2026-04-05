import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionUpdateManyWithoutRoleNestedInput } from '../role-permission/role-permission-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => RolePermissionUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput;
}
