import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FundTransactionCountAggregate } from './fund-transaction-count-aggregate.output';
import { FundTransactionAvgAggregate } from './fund-transaction-avg-aggregate.output';
import { FundTransactionSumAggregate } from './fund-transaction-sum-aggregate.output';
import { FundTransactionMinAggregate } from './fund-transaction-min-aggregate.output';
import { FundTransactionMaxAggregate } from './fund-transaction-max-aggregate.output';

@ObjectType()
export class AggregateFundTransaction {

    @Field(() => FundTransactionCountAggregate, {nullable:true})
    _count?: FundTransactionCountAggregate;

    @Field(() => FundTransactionAvgAggregate, {nullable:true})
    _avg?: FundTransactionAvgAggregate;

    @Field(() => FundTransactionSumAggregate, {nullable:true})
    _sum?: FundTransactionSumAggregate;

    @Field(() => FundTransactionMinAggregate, {nullable:true})
    _min?: FundTransactionMinAggregate;

    @Field(() => FundTransactionMaxAggregate, {nullable:true})
    _max?: FundTransactionMaxAggregate;
}
