import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCategoryWhereInput } from './expense-category-where.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryOrderByWithAggregationInput } from './expense-category-order-by-with-aggregation.input';
import { ExpenseCategoryScalarFieldEnum } from './expense-category-scalar-field.enum';
import { ExpenseCategoryScalarWhereWithAggregatesInput } from './expense-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExpenseCategoryCountAggregateInput } from './expense-category-count-aggregate.input';
import { ExpenseCategoryMinAggregateInput } from './expense-category-min-aggregate.input';
import { ExpenseCategoryMaxAggregateInput } from './expense-category-max-aggregate.input';

@ArgsType()
export class ExpenseCategoryGroupByArgs {

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    @Type(() => ExpenseCategoryWhereInput)
    where?: ExpenseCategoryWhereInput;

    @Field(() => [ExpenseCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExpenseCategoryOrderByWithAggregationInput>;

    @Field(() => [ExpenseCategoryScalarFieldEnum], {nullable:false})
    by!: Array<`${ExpenseCategoryScalarFieldEnum}`>;

    @Field(() => ExpenseCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExpenseCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExpenseCategoryCountAggregateInput, {nullable:true})
    _count?: ExpenseCategoryCountAggregateInput;

    @Field(() => ExpenseCategoryMinAggregateInput, {nullable:true})
    _min?: ExpenseCategoryMinAggregateInput;

    @Field(() => ExpenseCategoryMaxAggregateInput, {nullable:true})
    _max?: ExpenseCategoryMaxAggregateInput;
}
