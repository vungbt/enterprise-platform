import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseCategoryWhereUniqueInput } from './expense-category-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryCreateWithoutExpensesInput } from './expense-category-create-without-expenses.input';

@InputType()
export class ExpenseCategoryCreateOrConnectWithoutExpensesInput {

    @Field(() => ExpenseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ExpenseCategoryCreateWithoutExpensesInput, {nullable:false})
    @Type(() => ExpenseCategoryCreateWithoutExpensesInput)
    create!: ExpenseCategoryCreateWithoutExpensesInput;
}
