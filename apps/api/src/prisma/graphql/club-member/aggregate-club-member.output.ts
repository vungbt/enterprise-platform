import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubMemberCountAggregate } from './club-member-count-aggregate.output';
import { ClubMemberMinAggregate } from './club-member-min-aggregate.output';
import { ClubMemberMaxAggregate } from './club-member-max-aggregate.output';

@ObjectType()
export class AggregateClubMember {

    @Field(() => ClubMemberCountAggregate, {nullable:true})
    _count?: ClubMemberCountAggregate;

    @Field(() => ClubMemberMinAggregate, {nullable:true})
    _min?: ClubMemberMinAggregate;

    @Field(() => ClubMemberMaxAggregate, {nullable:true})
    _max?: ClubMemberMaxAggregate;
}
