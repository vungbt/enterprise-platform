import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from '../prisma/club-member-role.enum';
import { ClubMemberStatus } from '../prisma/club-member-status.enum';
import { ClubCreateNestedOneWithoutMembersInput } from '../club/club-create-nested-one-without-members.input';
import { UserCreateNestedOneWithoutClubMembershipsInput } from '../user/user-create-nested-one-without-club-memberships.input';

@InputType()
export class ClubMemberCreateInput {

    @Field(() => ClubMemberRole, {nullable:true})
    role?: `${ClubMemberRole}`;

    @Field(() => ClubMemberStatus, {nullable:true})
    status?: `${ClubMemberStatus}`;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutMembersInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutMembersInput;

    @Field(() => UserCreateNestedOneWithoutClubMembershipsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutClubMembershipsInput;
}
