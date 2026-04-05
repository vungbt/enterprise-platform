import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedCustomersInput } from './user-create-without-owned-customers.input';

@InputType()
export class UserCreateOrConnectWithoutOwnedCustomersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOwnedCustomersInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedCustomersInput)
    create!: UserCreateWithoutOwnedCustomersInput;
}
