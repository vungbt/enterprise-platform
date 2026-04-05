import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';

@InputType()
export class ExpenseListRelationFilter {

    @Field(() => ExpenseWhereInput, {nullable:true})
    every?: ExpenseWhereInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    some?: ExpenseWhereInput;

    @Field(() => ExpenseWhereInput, {nullable:true})
    none?: ExpenseWhereInput;
}
