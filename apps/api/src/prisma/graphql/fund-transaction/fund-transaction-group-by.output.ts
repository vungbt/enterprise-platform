import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FundTransactionType } from '../prisma/fund-transaction-type.enum';
import { FundFlow } from '../prisma/fund-flow.enum';
import { Float } from '@nestjs/graphql';
import { FundTransactionCountAggregate } from './fund-transaction-count-aggregate.output';
import { FundTransactionAvgAggregate } from './fund-transaction-avg-aggregate.output';
import { FundTransactionSumAggregate } from './fund-transaction-sum-aggregate.output';
import { FundTransactionMinAggregate } from './fund-transaction-min-aggregate.output';
import { FundTransactionMaxAggregate } from './fund-transaction-max-aggregate.output';

@ObjectType()
export class FundTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => FundTransactionType, {nullable:false})
    type!: `${FundTransactionType}`;

    @Field(() => FundFlow, {nullable:false})
    flow!: `${FundFlow}`;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    balanceAfter!: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    refContribId?: string;

    @Field(() => String, {nullable:true})
    refExpenseId?: string;

    @Field(() => String, {nullable:true})
    refTransactionId?: string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

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
