import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumClubStatusFilter } from '../prisma/enum-club-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { ClubMemberListRelationFilter } from '../club-member/club-member-list-relation-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';
import { ClubFundNullableScalarRelationFilter } from '../club-fund/club-fund-nullable-scalar-relation-filter.input';

@InputType()
export class ClubWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ClubWhereInput], {nullable:true})
    AND?: Array<ClubWhereInput>;

    @Field(() => [ClubWhereInput], {nullable:true})
    OR?: Array<ClubWhereInput>;

    @Field(() => [ClubWhereInput], {nullable:true})
    NOT?: Array<ClubWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sport?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumClubStatusFilter, {nullable:true})
    status?: EnumClubStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    foundedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    createdById?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    createdBy?: UserScalarRelationFilter;

    @Field(() => ClubMemberListRelationFilter, {nullable:true})
    members?: ClubMemberListRelationFilter;

    @Field(() => ExpenseListRelationFilter, {nullable:true})
    expenses?: ExpenseListRelationFilter;

    @Field(() => ClubFundNullableScalarRelationFilter, {nullable:true})
    fund?: ClubFundNullableScalarRelationFilter;
}
