import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubCountAggregate } from './club-count-aggregate.output';
import { ClubMinAggregate } from './club-min-aggregate.output';
import { ClubMaxAggregate } from './club-max-aggregate.output';

@ObjectType()
export class AggregateClub {

    @Field(() => ClubCountAggregate, {nullable:true})
    _count?: ClubCountAggregate;

    @Field(() => ClubMinAggregate, {nullable:true})
    _min?: ClubMinAggregate;

    @Field(() => ClubMaxAggregate, {nullable:true})
    _max?: ClubMaxAggregate;
}
