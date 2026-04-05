import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCategoryCreateManyInput } from './expense-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyExpenseCategoryArgs {

    @Field(() => [ExpenseCategoryCreateManyInput], {nullable:false})
    @Type(() => ExpenseCategoryCreateManyInput)
    data!: Array<ExpenseCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
