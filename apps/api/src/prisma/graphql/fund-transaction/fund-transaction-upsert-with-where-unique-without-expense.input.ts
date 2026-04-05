import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionUpdateWithoutExpenseInput } from './fund-transaction-update-without-expense.input';
import { FundTransactionCreateWithoutExpenseInput } from './fund-transaction-create-without-expense.input';

@InputType()
export class FundTransactionUpsertWithWhereUniqueWithoutExpenseInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionUpdateWithoutExpenseInput, {nullable:false})
    @Type(() => FundTransactionUpdateWithoutExpenseInput)
    update!: FundTransactionUpdateWithoutExpenseInput;

    @Field(() => FundTransactionCreateWithoutExpenseInput, {nullable:false})
    @Type(() => FundTransactionCreateWithoutExpenseInput)
    create!: FundTransactionCreateWithoutExpenseInput;
}
