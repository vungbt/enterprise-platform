import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFundTransactionsInput } from './user-create-without-fund-transactions.input';

@InputType()
export class UserCreateOrConnectWithoutFundTransactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutFundTransactionsInput)
    create!: UserCreateWithoutFundTransactionsInput;
}
