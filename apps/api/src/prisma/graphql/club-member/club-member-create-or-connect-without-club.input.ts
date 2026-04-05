import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateWithoutClubInput } from './club-member-create-without-club.input';

@InputType()
export class ClubMemberCreateOrConnectWithoutClubInput {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberCreateWithoutClubInput, {nullable:false})
    @Type(() => ClubMemberCreateWithoutClubInput)
    create!: ClubMemberCreateWithoutClubInput;
}
