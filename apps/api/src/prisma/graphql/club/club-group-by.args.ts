import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';
import { ClubOrderByWithAggregationInput } from './club-order-by-with-aggregation.input';
import { ClubScalarFieldEnum } from './club-scalar-field.enum';
import { ClubScalarWhereWithAggregatesInput } from './club-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClubCountAggregateInput } from './club-count-aggregate.input';
import { ClubMinAggregateInput } from './club-min-aggregate.input';
import { ClubMaxAggregateInput } from './club-max-aggregate.input';

@ArgsType()
export class ClubGroupByArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => [ClubOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClubOrderByWithAggregationInput>;

    @Field(() => [ClubScalarFieldEnum], {nullable:false})
    by!: Array<`${ClubScalarFieldEnum}`>;

    @Field(() => ClubScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClubScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClubCountAggregateInput, {nullable:true})
    _count?: ClubCountAggregateInput;

    @Field(() => ClubMinAggregateInput, {nullable:true})
    _min?: ClubMinAggregateInput;

    @Field(() => ClubMaxAggregateInput, {nullable:true})
    _max?: ClubMaxAggregateInput;
}
