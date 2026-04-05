import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubFundWhereInput } from './club-fund-where.input';
import { Type } from 'class-transformer';
import { ClubFundOrderByWithRelationInput } from './club-fund-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClubFundWhereUniqueInput } from './club-fund-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubFundCountAggregateInput } from './club-fund-count-aggregate.input';
import { ClubFundAvgAggregateInput } from './club-fund-avg-aggregate.input';
import { ClubFundSumAggregateInput } from './club-fund-sum-aggregate.input';
import { ClubFundMinAggregateInput } from './club-fund-min-aggregate.input';
import { ClubFundMaxAggregateInput } from './club-fund-max-aggregate.input';

@ArgsType()
export class ClubFundAggregateArgs {

    @Field(() => ClubFundWhereInput, {nullable:true})
    @Type(() => ClubFundWhereInput)
    where?: ClubFundWhereInput;

    @Field(() => [ClubFundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubFundOrderByWithRelationInput>;

    @Field(() => ClubFundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClubFundWhereUniqueInput, 'id' | 'clubId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClubFundCountAggregateInput, {nullable:true})
    _count?: ClubFundCountAggregateInput;

    @Field(() => ClubFundAvgAggregateInput, {nullable:true})
    _avg?: ClubFundAvgAggregateInput;

    @Field(() => ClubFundSumAggregateInput, {nullable:true})
    _sum?: ClubFundSumAggregateInput;

    @Field(() => ClubFundMinAggregateInput, {nullable:true})
    _min?: ClubFundMinAggregateInput;

    @Field(() => ClubFundMaxAggregateInput, {nullable:true})
    _max?: ClubFundMaxAggregateInput;
}
