import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedCustomersInput } from './user-create-without-owned-customers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedCustomersInput } from './user-create-or-connect-without-owned-customers.input';
import { UserUpsertWithoutOwnedCustomersInput } from './user-upsert-without-owned-customers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOwnedCustomersInput } from './user-update-to-one-with-where-without-owned-customers.input';

@InputType()
export class UserUpdateOneRequiredWithoutOwnedCustomersNestedInput {

    @Field(() => UserCreateWithoutOwnedCustomersInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedCustomersInput)
    create?: UserCreateWithoutOwnedCustomersInput;

    @Field(() => UserCreateOrConnectWithoutOwnedCustomersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedCustomersInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCustomersInput;

    @Field(() => UserUpsertWithoutOwnedCustomersInput, {nullable:true})
    @Type(() => UserUpsertWithoutOwnedCustomersInput)
    upsert?: UserUpsertWithoutOwnedCustomersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutOwnedCustomersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOwnedCustomersInput)
    update?: UserUpdateToOneWithWhereWithoutOwnedCustomersInput;
}
