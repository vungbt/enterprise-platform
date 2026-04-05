import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from '../prisma/club-member-role.enum';
import { ClubMemberStatus } from '../prisma/club-member-status.enum';
import { ClubUpdateOneRequiredWithoutMembersNestedInput } from '../club/club-update-one-required-without-members-nested.input';
import { UserUpdateOneRequiredWithoutClubMembershipsNestedInput } from '../user/user-update-one-required-without-club-memberships-nested.input';

@InputType()
export class ClubMemberUpdateInput {

    @Field(() => ClubMemberRole, {nullable:true})
    role?: `${ClubMemberRole}`;

    @Field(() => ClubMemberStatus, {nullable:true})
    status?: `${ClubMemberStatus}`;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => ClubUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutMembersNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutClubMembershipsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutClubMembershipsNestedInput;
}
