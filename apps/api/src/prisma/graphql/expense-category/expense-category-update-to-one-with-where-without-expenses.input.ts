import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCategoryWhereInput } from './expense-category-where.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryUpdateWithoutExpensesInput } from './expense-category-update-without-expenses.input';

@InputType()
export class ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput {

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    @Type(() => ExpenseCategoryWhereInput)
    where?: ExpenseCategoryWhereInput;

    @Field(() => ExpenseCategoryUpdateWithoutExpensesInput, {nullable:false})
    @Type(() => ExpenseCategoryUpdateWithoutExpensesInput)
    data!: ExpenseCategoryUpdateWithoutExpensesInput;
}
