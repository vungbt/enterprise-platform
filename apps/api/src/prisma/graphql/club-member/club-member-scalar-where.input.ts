import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumClubMemberRoleFilter } from '../prisma/enum-club-member-role-filter.input';
import { EnumClubMemberStatusFilter } from '../prisma/enum-club-member-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ClubMemberScalarWhereInput {

    @Field(() => [ClubMemberScalarWhereInput], {nullable:true})
    AND?: Array<ClubMemberScalarWhereInput>;

    @Field(() => [ClubMemberScalarWhereInput], {nullable:true})
    OR?: Array<ClubMemberScalarWhereInput>;

    @Field(() => [ClubMemberScalarWhereInput], {nullable:true})
    NOT?: Array<ClubMemberScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    clubId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumClubMemberRoleFilter, {nullable:true})
    role?: EnumClubMemberRoleFilter;

    @Field(() => EnumClubMemberStatusFilter, {nullable:true})
    status?: EnumClubMemberStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    joinedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    leftAt?: DateTimeNullableFilter;
}
