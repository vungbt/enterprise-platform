import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCategoryCreateInput } from './expense-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneExpenseCategoryArgs {

    @Field(() => ExpenseCategoryCreateInput, {nullable:false})
    @Type(() => ExpenseCategoryCreateInput)
    data!: ExpenseCategoryCreateInput;
}
