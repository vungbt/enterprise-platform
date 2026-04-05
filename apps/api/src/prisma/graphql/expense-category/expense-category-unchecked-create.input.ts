import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseUncheckedCreateNestedManyWithoutCategoryInput } from '../expense/expense-unchecked-create-nested-many-without-category.input';

@InputType()
export class ExpenseCategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExpenseUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
}
