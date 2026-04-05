import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseUpdateInput } from './expense-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@ArgsType()
export class UpdateOneExpenseArgs {

    @Field(() => ExpenseUpdateInput, {nullable:false})
    @Type(() => ExpenseUpdateInput)
    data!: ExpenseUpdateInput;

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;
}
