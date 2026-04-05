import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRolesNestedInput } from '../user/user-update-one-required-without-roles-nested.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../role/role-update-one-required-without-users-nested.input';

@InputType()
export class UserRoleUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRolesNestedInput;

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
}
