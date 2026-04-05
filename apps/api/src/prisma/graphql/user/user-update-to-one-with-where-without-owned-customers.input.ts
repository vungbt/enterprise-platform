import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOwnedCustomersInput } from './user-update-without-owned-customers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOwnedCustomersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOwnedCustomersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwnedCustomersInput)
    data!: UserUpdateWithoutOwnedCustomersInput;
}
