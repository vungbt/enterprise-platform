import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateWithoutUserInput } from './club-member-create-without-user.input';

@InputType()
export class ClubMemberCreateOrConnectWithoutUserInput {

    @Field(() => ClubMemberWhereUniqueInput, {nullable:false})
    @Type(() => ClubMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>;

    @Field(() => ClubMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => ClubMemberCreateWithoutUserInput)
    create!: ClubMemberCreateWithoutUserInput;
}
