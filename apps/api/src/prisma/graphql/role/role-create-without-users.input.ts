import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => RolePermissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput;
}
