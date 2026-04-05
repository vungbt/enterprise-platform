import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutFundTransactionsInput } from './expense-create-without-fund-transactions.input';

@InputType()
export class ExpenseCreateOrConnectWithoutFundTransactionsInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseCreateWithoutFundTransactionsInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutFundTransactionsInput)
    create!: ExpenseCreateWithoutFundTransactionsInput;
}
