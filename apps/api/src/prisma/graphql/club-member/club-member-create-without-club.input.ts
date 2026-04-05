import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberRole } from '../prisma/club-member-role.enum';
import { ClubMemberStatus } from '../prisma/club-member-status.enum';
import { UserCreateNestedOneWithoutClubMembershipsInput } from '../user/user-create-nested-one-without-club-memberships.input';

@InputType()
export class ClubMemberCreateWithoutClubInput {

    @Field(() => ClubMemberRole, {nullable:true})
    role?: `${ClubMemberRole}`;

    @Field(() => ClubMemberStatus, {nullable:true})
    status?: `${ClubMemberStatus}`;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutClubMembershipsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutClubMembershipsInput;
}
