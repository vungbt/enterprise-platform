import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { Type } from 'class-transformer';
import { FundContributionOrderByWithRelationInput } from './fund-contribution-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundContributionCountAggregateInput } from './fund-contribution-count-aggregate.input';
import { FundContributionAvgAggregateInput } from './fund-contribution-avg-aggregate.input';
import { FundContributionSumAggregateInput } from './fund-contribution-sum-aggregate.input';
import { FundContributionMinAggregateInput } from './fund-contribution-min-aggregate.input';
import { FundContributionMaxAggregateInput } from './fund-contribution-max-aggregate.input';

@ArgsType()
export class FundContributionAggregateArgs {

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    where?: FundContributionWhereInput;

    @Field(() => [FundContributionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FundContributionOrderByWithRelationInput>;

    @Field(() => FundContributionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FundContributionCountAggregateInput, {nullable:true})
    _count?: FundContributionCountAggregateInput;

    @Field(() => FundContributionAvgAggregateInput, {nullable:true})
    _avg?: FundContributionAvgAggregateInput;

    @Field(() => FundContributionSumAggregateInput, {nullable:true})
    _sum?: FundContributionSumAggregateInput;

    @Field(() => FundContributionMinAggregateInput, {nullable:true})
    _min?: FundContributionMinAggregateInput;

    @Field(() => FundContributionMaxAggregateInput, {nullable:true})
    _max?: FundContributionMaxAggregateInput;
}
