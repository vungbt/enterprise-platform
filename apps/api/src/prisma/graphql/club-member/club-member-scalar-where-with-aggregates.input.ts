import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumClubMemberRoleWithAggregatesFilter } from '../prisma/enum-club-member-role-with-aggregates-filter.input';
import { EnumClubMemberStatusWithAggregatesFilter } from '../prisma/enum-club-member-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ClubMemberScalarWhereWithAggregatesInput {

    @Field(() => [ClubMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ClubMemberScalarWhereWithAggregatesInput>;

    @Field(() => [ClubMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ClubMemberScalarWhereWithAggregatesInput>;

    @Field(() => [ClubMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ClubMemberScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clubId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => EnumClubMemberRoleWithAggregatesFilter, {nullable:true})
    role?: EnumClubMemberRoleWithAggregatesFilter;

    @Field(() => EnumClubMemberStatusWithAggregatesFilter, {nullable:true})
    status?: EnumClubMemberStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    joinedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    leftAt?: DateTimeNullableWithAggregatesFilter;
}
