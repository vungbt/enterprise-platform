import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCategoryCreateWithoutExpensesInput } from './expense-category-create-without-expenses.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryCreateOrConnectWithoutExpensesInput } from './expense-category-create-or-connect-without-expenses.input';
import { Prisma } from '@prisma/client';
import { ExpenseCategoryWhereUniqueInput } from './expense-category-where-unique.input';

@InputType()
export class ExpenseCategoryCreateNestedOneWithoutExpensesInput {

    @Field(() => ExpenseCategoryCreateWithoutExpensesInput, {nullable:true})
    @Type(() => ExpenseCategoryCreateWithoutExpensesInput)
    create?: ExpenseCategoryCreateWithoutExpensesInput;

    @Field(() => ExpenseCategoryCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => ExpenseCategoryCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: ExpenseCategoryCreateOrConnectWithoutExpensesInput;

    @Field(() => ExpenseCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ExpenseCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ExpenseCategoryWhereUniqueInput, 'id' | 'name'>;
}
