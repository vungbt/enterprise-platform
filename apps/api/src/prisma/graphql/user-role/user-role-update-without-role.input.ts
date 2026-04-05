import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRolesNestedInput } from '../user/user-update-one-required-without-roles-nested.input';

@InputType()
export class UserRoleUpdateWithoutRoleInput {

    @Field(() => UserUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRolesNestedInput;
}
