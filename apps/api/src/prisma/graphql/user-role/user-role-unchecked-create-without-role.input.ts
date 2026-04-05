import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleUncheckedCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    userId!: string;
}
