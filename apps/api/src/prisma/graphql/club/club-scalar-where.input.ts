import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumClubStatusFilter } from '../prisma/enum-club-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ClubScalarWhereInput {

    @Field(() => [ClubScalarWhereInput], {nullable:true})
    AND?: Array<ClubScalarWhereInput>;

    @Field(() => [ClubScalarWhereInput], {nullable:true})
    OR?: Array<ClubScalarWhereInput>;

    @Field(() => [ClubScalarWhereInput], {nullable:true})
    NOT?: Array<ClubScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
