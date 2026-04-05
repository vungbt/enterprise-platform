import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ClubFundCountAggregate } from './club-fund-count-aggregate.output';
import { ClubFundAvgAggregate } from './club-fund-avg-aggregate.output';
import { ClubFundSumAggregate } from './club-fund-sum-aggregate.output';
import { ClubFundMinAggregate } from './club-fund-min-aggregate.output';
import { ClubFundMaxAggregate } from './club-fund-max-aggregate.output';

@ObjectType()
export class ClubFundGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    clubId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    initialBalance!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ClubFundCountAggregate, {nullable:true})
    _count?: ClubFundCountAggregate;

    @Field(() => ClubFundAvgAggregate, {nullable:true})
    _avg?: ClubFundAvgAggregate;

    @Field(() => ClubFundSumAggregate, {nullable:true})
    _sum?: ClubFundSumAggregate;

    @Field(() => ClubFundMinAggregate, {nullable:true})
    _min?: ClubFundMinAggregate;

    @Field(() => ClubFundMaxAggregate, {nullable:true})
    _max?: ClubFundMaxAggregate;
}
