import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutFundTransactionsInput } from './expense-update-without-fund-transactions.input';

@InputType()
export class ExpenseUpdateToOneWithWhereWithoutFundTransactionsInput {

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    where?: ExpenseWhereInput;

    @Field(() => ExpenseUpdateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutFundTransactionsInput)
    data!: ExpenseUpdateWithoutFundTransactionsInput;
}
