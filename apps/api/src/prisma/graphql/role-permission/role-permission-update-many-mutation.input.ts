import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    permission?: string;
}
