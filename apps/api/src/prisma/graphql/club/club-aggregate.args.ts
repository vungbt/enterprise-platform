import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';
import { ClubOrderByWithRelationInput } from './club-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubCountAggregateInput } from './club-count-aggregate.input';
import { ClubMinAggregateInput } from './club-min-aggregate.input';
import { ClubMaxAggregateInput } from './club-max-aggregate.input';

@ArgsType()
export class ClubAggregateArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => [ClubOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubOrderByWithRelationInput>;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;

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
