import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';

@InputType()
export class ExpenseNullableScalarRelationFilter {

    @Field(() => ExpenseWhereInput, {nullable:true})
    is?: ExpenseWhereInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    isNot?: ExpenseWhereInput;
}
