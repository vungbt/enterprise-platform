import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCategoryUpdateWithoutExpensesInput } from './expense-category-update-without-expenses.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryCreateWithoutExpensesInput } from './expense-category-create-without-expenses.input';
import { ExpenseCategoryWhereInput } from './expense-category-where.input';

@InputType()
export class ExpenseCategoryUpsertWithoutExpensesInput {

    @Field(() => ExpenseCategoryUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => ExpenseCategoryUpdateWithoutExpensesInput)
    update!: ExpenseCategoryUpdateWithoutExpensesInput;

    @Field(() => ExpenseCategoryCreateWithoutExpensesInput, {nullable:false})
    @Type(() => ExpenseCategoryCreateWithoutExpensesInput)
    create!: ExpenseCategoryCreateWithoutExpensesInput;

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    @Type(() => ExpenseCategoryWhereInput)
    where?: ExpenseCategoryWhereInput;
}
