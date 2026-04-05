import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedCustomersInput } from './user-create-without-owned-customers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedCustomersInput } from './user-create-or-connect-without-owned-customers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOwnedCustomersInput {

    @Field(() => UserCreateWithoutOwnedCustomersInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedCustomersInput)
    create?: UserCreateWithoutOwnedCustomersInput;

    @Field(() => UserCreateOrConnectWithoutOwnedCustomersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedCustomersInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCustomersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
