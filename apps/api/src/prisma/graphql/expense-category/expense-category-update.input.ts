import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseUpdateManyWithoutCategoryNestedInput } from '../expense/expense-update-many-without-category-nested.input';

@InputType()
export class ExpenseCategoryUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExpenseUpdateManyWithoutCategoryNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput;
}
