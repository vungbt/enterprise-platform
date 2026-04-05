import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
}
