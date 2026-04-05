import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberClubIdUserIdCompoundUniqueInput } from './club-member-club-id-user-id-compound-unique.input';
import { ClubMemberWhereInput } from './club-member-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumClubMemberRoleFilter } from '../prisma/enum-club-member-role-filter.input';
import { EnumClubMemberStatusFilter } from '../prisma/enum-club-member-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubScalarRelationFilter } from '../club/club-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ClubMemberWhereUniqueInput {

    @Field(() => ClubMemberClubIdUserIdCompoundUniqueInput, {nullable:true})
    clubId_userId?: ClubMemberClubIdUserIdCompoundUniqueInput;

    @Field(() => [ClubMemberWhereInput], {nullable:true})
    AND?: Array<ClubMemberWhereInput>;

    @Field(() => [ClubMemberWhereInput], {nullable:true})
    OR?: Array<ClubMemberWhereInput>;

    @Field(() => [ClubMemberWhereInput], {nullable:true})
    NOT?: Array<ClubMemberWhereInput>;

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

    @Field(() => ClubScalarRelationFilter, {nullable:true})
    club?: ClubScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
