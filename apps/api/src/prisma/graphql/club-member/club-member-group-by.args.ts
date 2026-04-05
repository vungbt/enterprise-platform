import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberWhereInput } from './club-member-where.input';
import { Type } from 'class-transformer';
import { ClubMemberOrderByWithAggregationInput } from './club-member-order-by-with-aggregation.input';
import { ClubMemberScalarFieldEnum } from './club-member-scalar-field.enum';
import { ClubMemberScalarWhereWithAggregatesInput } from './club-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClubMemberCountAggregateInput } from './club-member-count-aggregate.input';
import { ClubMemberMinAggregateInput } from './club-member-min-aggregate.input';
import { ClubMemberMaxAggregateInput } from './club-member-max-aggregate.input';

@ArgsType()
export class ClubMemberGroupByArgs {

    @Field(() => ClubMemberWhereInput, {nullable:true})
    @Type(() => ClubMemberWhereInput)
    where?: ClubMemberWhereInput;

    @Field(() => [ClubMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClubMemberOrderByWithAggregationInput>;

    @Field(() => [ClubMemberScalarFieldEnum], {nullable:false})
    by!: Array<`${ClubMemberScalarFieldEnum}`>;

    @Field(() => ClubMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClubMemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClubMemberCountAggregateInput, {nullable:true})
    _count?: ClubMemberCountAggregateInput;

    @Field(() => ClubMemberMinAggregateInput, {nullable:true})
    _min?: ClubMemberMinAggregateInput;

    @Field(() => ClubMemberMaxAggregateInput, {nullable:true})
    _max?: ClubMemberMaxAggregateInput;
}
