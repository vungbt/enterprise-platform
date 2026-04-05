import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubMemberRole } from '../prisma/club-member-role.enum';
import { ClubMemberStatus } from '../prisma/club-member-status.enum';

@ObjectType()
export class ClubMemberMaxAggregate {

    @Field(() => String, {nullable:true})
    clubId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ClubMemberRole, {nullable:true})
    role?: `${ClubMemberRole}`;

    @Field(() => ClubMemberStatus, {nullable:true})
    status?: `${ClubMemberStatus}`;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;
}
