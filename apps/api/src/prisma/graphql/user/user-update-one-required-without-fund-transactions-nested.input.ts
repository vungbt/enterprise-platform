import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFundTransactionsInput } from './user-create-without-fund-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFundTransactionsInput } from './user-create-or-connect-without-fund-transactions.input';
import { UserUpsertWithoutFundTransactionsInput } from './user-upsert-without-fund-transactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFundTransactionsInput } from './user-update-to-one-with-where-without-fund-transactions.input';

@InputType()
export class UserUpdateOneRequiredWithoutFundTransactionsNestedInput {

    @Field(() => UserCreateWithoutFundTransactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutFundTransactionsInput)
    create?: UserCreateWithoutFundTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutFundTransactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFundTransactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFundTransactionsInput;

    @Field(() => UserUpsertWithoutFundTransactionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutFundTransactionsInput)
    upsert?: UserUpsertWithoutFundTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFundTransactionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFundTransactionsInput)
    update?: UserUpdateToOneWithWhereWithoutFundTransactionsInput;
}
