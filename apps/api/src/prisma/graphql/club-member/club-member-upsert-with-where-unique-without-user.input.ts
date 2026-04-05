import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberUpdateWithoutUserInput } from './club-member-update-without-user.input';
import { ClubMemberCreateWithoutUserInput } from './club-member-create-without-user.input';

@InputType()
export class ClubMemberUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => ClubMemberUpdateWithoutUserInput)
    update!: ClubMemberUpdateWithoutUserInput;

    @Field(() => ClubMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => ClubMemberCreateWithoutUserInput)
    create!: ClubMemberCreateWithoutUserInput;
}
