import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubMemberUpdateInput } from './club-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';

@ArgsType()
export class UpdateOneClubMemberArgs {

    @Field(() => ClubMemberUpdateInput, {nullable:false})
    @Type(() => ClubMemberUpdateInput)
    data!: ClubMemberUpdateInput;

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;
}
