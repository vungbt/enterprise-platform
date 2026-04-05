import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberUpdateWithoutClubInput } from './club-member-update-without-club.input';

@InputType()
export class ClubMemberUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberUpdateWithoutClubInput, {nullable:false})
    @Type(() => ClubMemberUpdateWithoutClubInput)
    data!: ClubMemberUpdateWithoutClubInput;
}
