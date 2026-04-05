import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutFundInput } from './expense-update-without-fund.input';

@InputType()
export class ExpenseUpdateWithWhereUniqueWithoutFundInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateWithoutFundInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutFundInput)
    data!: ExpenseUpdateWithoutFundInput;
}
