import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseUncheckedUpdateManyWithoutCategoryNestedInput } from '../expense/expense-unchecked-update-many-without-category-nested.input';

@InputType()
export class ExpenseCategoryUncheckedUpdateInput {

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

    @Field(() => ExpenseUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
}
