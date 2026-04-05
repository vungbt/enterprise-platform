import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Expense } from '../expense/expense.model';
import { ExpenseCategoryCount } from './expense-category-count.output';

@ObjectType()
export class ExpenseCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Expense], {nullable:true})
    expenses?: Array<Expense>;

    @Field(() => ExpenseCategoryCount, {nullable:false})
    _count?: ExpenseCategoryCount;
}
