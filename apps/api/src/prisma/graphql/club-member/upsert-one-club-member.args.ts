import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateInput } from './club-member-create.input';
import { ClubMemberUpdateInput } from './club-member-update.input';

@ArgsType()
export class UpsertOneClubMemberArgs {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberCreateInput, {nullable:false})
    @Type(() => ClubMemberCreateInput)
    create!: ClubMemberCreateInput;

    @Field(() => ClubMemberUpdateInput, {nullable:false})
    @Type(() => ClubMemberUpdateInput)
    update!: ClubMemberUpdateInput;
}
