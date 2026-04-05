import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FundContributionCountAggregate } from './fund-contribution-count-aggregate.output';
import { FundContributionAvgAggregate } from './fund-contribution-avg-aggregate.output';
import { FundContributionSumAggregate } from './fund-contribution-sum-aggregate.output';
import { FundContributionMinAggregate } from './fund-contribution-min-aggregate.output';
import { FundContributionMaxAggregate } from './fund-contribution-max-aggregate.output';

@ObjectType()
export class AggregateFundContribution {

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
