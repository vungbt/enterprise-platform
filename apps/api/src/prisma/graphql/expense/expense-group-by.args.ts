import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';
import { Type } from 'class-transformer';
import { ExpenseOrderByWithAggregationInput } from './expense-order-by-with-aggregation.input';
import { ExpenseScalarFieldEnum } from './expense-scalar-field.enum';
import { ExpenseScalarWhereWithAggregatesInput } from './expense-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExpenseCountAggregateInput } from './expense-count-aggregate.input';
import { ExpenseAvgAggregateInput } from './expense-avg-aggregate.input';
import { ExpenseSumAggregateInput } from './expense-sum-aggregate.input';
import { ExpenseMinAggregateInput } from './expense-min-aggregate.input';
import { ExpenseMaxAggregateInput } from './expense-max-aggregate.input';

@ArgsType()
export class ExpenseGroupByArgs {

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    where?: ExpenseWhereInput;

    @Field(() => [ExpenseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExpenseOrderByWithAggregationInput>;

    @Field(() => [ExpenseScalarFieldEnum], {nullable:false})
    by!: Array<`${ExpenseScalarFieldEnum}`>;

    @Field(() => ExpenseScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExpenseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExpenseCountAggregateInput, {nullable:true})
    _count?: ExpenseCountAggregateInput;

    @Field(() => ExpenseAvgAggregateInput, {nullable:true})
    _avg?: ExpenseAvgAggregateInput;

    @Field(() => ExpenseSumAggregateInput, {nullable:true})
    _sum?: ExpenseSumAggregateInput;

    @Field(() => ExpenseMinAggregateInput, {nullable:true})
    _min?: ExpenseMinAggregateInput;

    @Field(() => ExpenseMaxAggregateInput, {nullable:true})
    _max?: ExpenseMaxAggregateInput;
}
