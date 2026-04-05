import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubMemberRole } from '../prisma/club-member-role.enum';
import { ClubMemberStatus } from '../prisma/club-member-status.enum';
import { ClubMemberCountAggregate } from './club-member-count-aggregate.output';
import { ClubMemberMinAggregate } from './club-member-min-aggregate.output';
import { ClubMemberMaxAggregate } from './club-member-max-aggregate.output';

@ObjectType()
export class ClubMemberGroupBy {

    @Field(() => String, {nullable:false})
    clubId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ClubMemberRole, {nullable:false})
    role!: `${ClubMemberRole}`;

    @Field(() => ClubMemberStatus, {nullable:false})
    status!: `${ClubMemberStatus}`;

    @Field(() => Date, {nullable:false})
    joinedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => ClubMemberCountAggregate, {nullable:true})
    _count?: ClubMemberCountAggregate;

    @Field(() => ClubMemberMinAggregate, {nullable:true})
    _min?: ClubMemberMinAggregate;

    @Field(() => ClubMemberMaxAggregate, {nullable:true})
    _max?: ClubMemberMaxAggregate;
}
