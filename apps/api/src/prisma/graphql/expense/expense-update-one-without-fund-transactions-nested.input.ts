import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutFundTransactionsInput } from './expense-create-without-fund-transactions.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutFundTransactionsInput } from './expense-create-or-connect-without-fund-transactions.input';
import { ExpenseUpsertWithoutFundTransactionsInput } from './expense-upsert-without-fund-transactions.input';
import { ExpenseWhereInput } from './expense-where.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput } from './expense-update-to-one-with-where-without-fund-transactions.input';

@InputType()
export class ExpenseUpdateOneWithoutFundTransactionsNestedInput {

    @Field(() => ExpenseCreateWithoutFundTransactionsInput, {nullable:true})
    @Type(() => ExpenseCreateWithoutFundTransactionsInput)
    create?: ExpenseCreateWithoutFundTransactionsInput;

    @Field(() => ExpenseCreateOrConnectWithoutFundTransactionsInput, {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutFundTransactionsInput)
    connectOrCreate?: ExpenseCreateOrConnectWithoutFundTransactionsInput;

    @Field(() => ExpenseUpsertWithoutFundTransactionsInput, {nullable:true})
    @Type(() => ExpenseUpsertWithoutFundTransactionsInput)
    upsert?: ExpenseUpsertWithoutFundTransactionsInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    disconnect?: ExpenseWhereInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    delete?: ExpenseWhereInput;

    @Field(() => ExpenseWhereUniqueInput, {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput, {nullable:true})
    @Type(() => ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput)
    update?: ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput;
}
