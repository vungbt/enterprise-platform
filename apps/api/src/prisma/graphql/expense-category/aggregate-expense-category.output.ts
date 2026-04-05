import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExpenseCategoryCountAggregate } from './expense-category-count-aggregate.output';
import { ExpenseCategoryMinAggregate } from './expense-category-min-aggregate.output';
import { ExpenseCategoryMaxAggregate } from './expense-category-max-aggregate.output';

@ObjectType()
export class AggregateExpenseCategory {

    @Field(() => ExpenseCategoryCountAggregate, {nullable:true})
    _count?: ExpenseCategoryCountAggregate;

    @Field(() => ExpenseCategoryMinAggregate, {nullable:true})
    _min?: ExpenseCategoryMinAggregate;

    @Field(() => ExpenseCategoryMaxAggregate, {nullable:true})
    _max?: ExpenseCategoryMaxAggregate;
}
