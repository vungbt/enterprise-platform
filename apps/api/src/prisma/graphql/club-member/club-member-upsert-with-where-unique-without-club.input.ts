import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberUpdateWithoutClubInput } from './club-member-update-without-club.input';
import { ClubMemberCreateWithoutClubInput } from './club-member-create-without-club.input';

@InputType()
export class ClubMemberUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberUpdateWithoutClubInput, {nullable:false})
    @Type(() => ClubMemberUpdateWithoutClubInput)
    update!: ClubMemberUpdateWithoutClubInput;

    @Field(() => ClubMemberCreateWithoutClubInput, {nullable:false})
    @Type(() => ClubMemberCreateWithoutClubInput)
    create!: ClubMemberCreateWithoutClubInput;
}
