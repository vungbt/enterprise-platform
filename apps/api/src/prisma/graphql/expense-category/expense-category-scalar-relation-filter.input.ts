import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCategoryWhereInput } from './expense-category-where.input';

@InputType()
export class ExpenseCategoryScalarRelationFilter {

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    is?: ExpenseCategoryWhereInput;

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    isNot?: ExpenseCategoryWhereInput;
}
