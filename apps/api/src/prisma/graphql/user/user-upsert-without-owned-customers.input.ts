import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOwnedCustomersInput } from './user-update-without-owned-customers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedCustomersInput } from './user-create-without-owned-customers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOwnedCustomersInput {

    @Field(() => UserUpdateWithoutOwnedCustomersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwnedCustomersInput)
    update!: UserUpdateWithoutOwnedCustomersInput;

    @Field(() => UserCreateWithoutOwnedCustomersInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedCustomersInput)
    create!: UserCreateWithoutOwnedCustomersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
