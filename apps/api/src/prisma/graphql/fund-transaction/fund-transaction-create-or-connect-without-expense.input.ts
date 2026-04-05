import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateWithoutExpenseInput } from './fund-transaction-create-without-expense.input';

@InputType()
export class FundTransactionCreateOrConnectWithoutExpenseInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionCreateWithoutExpenseInput, {nullable:false})
    @Type(() => FundTransactionCreateWithoutExpenseInput)
    create!: FundTransactionCreateWithoutExpenseInput;
}
