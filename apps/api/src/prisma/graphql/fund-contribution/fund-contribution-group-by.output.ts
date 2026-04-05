import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionStatus } from '../prisma/fund-contribution-status.enum';
import { FundContributionCountAggregate } from './fund-contribution-count-aggregate.output';
import { FundContributionAvgAggregate } from './fund-contribution-avg-aggregate.output';
import { FundContributionSumAggregate } from './fund-contribution-sum-aggregate.output';
import { FundContributionMinAggregate } from './fund-contribution-min-aggregate.output';
import { FundContributionMaxAggregate } from './fund-contribution-max-aggregate.output';

@ObjectType()
export class FundContributionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => String, {nullable:false})
    memberId!: string;

    @Field(() => Int, {nullable:true})
    month?: number;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:false})
    paidAt!: Date | string;

    @Field(() => FundContributionStatus, {nullable:false})
    status!: `${FundContributionStatus}`;

    @Field(() => String, {nullable:true})
    confirmedBy?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FundContributionCountAggregate, {nullable:true})
    _count?: FundContributionCountAggregate;

    @Field(() => FundContributionAvgAggregate, {nullable:true})
    _avg?: FundContributionAvgAggregate;

    @Field(() => FundContributionSumAggregate, {nullable:true})
    _sum?: FundContributionSumAggregate;

    @Field(() => FundContributionMinAggregate, {nullable:true})
    _min?: FundContributionMinAggregate;

    @Field(() => FundContributionMaxAggregate, {nullable:true})
    _max?: FundContributionMaxAggregate;
}
