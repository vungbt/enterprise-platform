import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionWhereInput } from './fund-transaction-where.input';
import { Type } from 'class-transformer';
import { FundTransactionOrderByWithAggregationInput } from './fund-transaction-order-by-with-aggregation.input';
import { FundTransactionScalarFieldEnum } from './fund-transaction-scalar-field.enum';
import { FundTransactionScalarWhereWithAggregatesInput } from './fund-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FundTransactionCountAggregateInput } from './fund-transaction-count-aggregate.input';
import { FundTransactionAvgAggregateInput } from './fund-transaction-avg-aggregate.input';
import { FundTransactionSumAggregateInput } from './fund-transaction-sum-aggregate.input';
import { FundTransactionMinAggregateInput } from './fund-transaction-min-aggregate.input';
import { FundTransactionMaxAggregateInput } from './fund-transaction-max-aggregate.input';

@ArgsType()
export class FundTransactionGroupByArgs {

    @Field(() => FundTransactionWhereInput, {nullable:true})
    @Type(() => FundTransactionWhereInput)
    where?: FundTransactionWhereInput;

    @Field(() => [FundTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FundTransactionOrderByWithAggregationInput>;

    @Field(() => [FundTransactionScalarFieldEnum], {nullable:false})
    by!: Array<`${FundTransactionScalarFieldEnum}`>;

    @Field(() => FundTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: FundTransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FundTransactionCountAggregateInput, {nullable:true})
    _count?: FundTransactionCountAggregateInput;

    @Field(() => FundTransactionAvgAggregateInput, {nullable:true})
    _avg?: FundTransactionAvgAggregateInput;

    @Field(() => FundTransactionSumAggregateInput, {nullable:true})
    _sum?: FundTransactionSumAggregateInput;

    @Field(() => FundTransactionMinAggregateInput, {nullable:true})
    _min?: FundTransactionMinAggregateInput;

    @Field(() => FundTransactionMaxAggregateInput, {nullable:true})
    _max?: FundTransactionMaxAggregateInput;
}
