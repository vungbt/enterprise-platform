import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionCreateManyRoleInput {

    @Field(() => String, {nullable:false})
    permission!: string;
}
