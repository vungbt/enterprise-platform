import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInput } from '../user-role/user-role-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutPermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput;
}
