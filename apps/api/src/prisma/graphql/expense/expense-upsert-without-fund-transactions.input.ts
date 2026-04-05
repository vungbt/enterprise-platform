import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseUpdateWithoutFundTransactionsInput } from './expense-update-without-fund-transactions.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutFundTransactionsInput } from './expense-create-without-fund-transactions.input';
import { ExpenseWhereInput } from './expense-where.input';

@InputType()
export class ExpenseUpsertWithoutFundTransactionsInput {

    @Field(() => ExpenseUpdateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutFundTransactionsInput)
    update!: ExpenseUpdateWithoutFundTransactionsInput;

    @Field(() => ExpenseCreateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutFundTransactionsInput)
    create!: ExpenseCreateWithoutFundTransactionsInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    where?: ExpenseWhereInput;
}
