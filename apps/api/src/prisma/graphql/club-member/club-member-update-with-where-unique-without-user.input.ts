import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberUpdateWithoutUserInput } from './club-member-update-without-user.input';

@InputType()
export class ClubMemberUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => ClubMemberUpdateWithoutUserInput)
    data!: ClubMemberUpdateWithoutUserInput;
}
