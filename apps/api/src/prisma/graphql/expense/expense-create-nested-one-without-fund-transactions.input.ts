import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutFundTransactionsInput } from './expense-create-without-fund-transactions.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutFundTransactionsInput } from './expense-create-or-connect-without-fund-transactions.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseCreateNestedOneWithoutFundTransactionsInput {

    @Field(() => ExpenseCreateWithoutFundTransactionsInput, {nullable:true})
    @Type(() => ExpenseCreateWithoutFundTransactionsInput)
    create?: ExpenseCreateWithoutFundTransactionsInput;

    @Field(() => ExpenseCreateOrConnectWithoutFundTransactionsInput, {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutFundTransactionsInput)
    connectOrCreate?: ExpenseCreateOrConnectWithoutFundTransactionsInput;

    @Field(() => ExpenseWhereUniqueInput, {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;
}
