import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFundTransactionsInput } from './user-create-without-fund-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFundTransactionsInput } from './user-create-or-connect-without-fund-transactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFundTransactionsInput {

    @Field(() => UserCreateWithoutFundTransactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutFundTransactionsInput)
    create?: UserCreateWithoutFundTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutFundTransactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFundTransactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFundTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
