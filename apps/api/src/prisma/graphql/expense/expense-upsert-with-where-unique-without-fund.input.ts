import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutFundInput } from './expense-update-without-fund.input';
import { ExpenseCreateWithoutFundInput } from './expense-create-without-fund.input';

@InputType()
export class ExpenseUpsertWithWhereUniqueWithoutFundInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateWithoutFundInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutFundInput)
    update!: ExpenseUpdateWithoutFundInput;

    @Field(() => ExpenseCreateWithoutFundInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutFundInput)
    create!: ExpenseCreateWithoutFundInput;
}
