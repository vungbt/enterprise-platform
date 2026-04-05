import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateNestedManyWithoutCategoryInput } from '../expense/expense-create-nested-many-without-category.input';

@InputType()
export class ExpenseCategoryCreateInput {

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

    @Field(() => ExpenseCreateNestedManyWithoutCategoryInput, {nullable:true})
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput;
}
