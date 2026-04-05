import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionUncheckedCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    permission!: string;
}
