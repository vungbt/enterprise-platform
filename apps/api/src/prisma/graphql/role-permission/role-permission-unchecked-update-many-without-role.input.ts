import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionUncheckedUpdateManyWithoutRoleInput {

    @Field(() => String, {nullable:true})
    permission?: string;
}
