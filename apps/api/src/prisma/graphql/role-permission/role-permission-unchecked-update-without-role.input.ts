import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionUncheckedUpdateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    permission?: string;
}
