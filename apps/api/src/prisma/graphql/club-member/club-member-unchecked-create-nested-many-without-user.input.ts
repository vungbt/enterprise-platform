import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberCreateWithoutUserInput } from './club-member-create-without-user.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateOrConnectWithoutUserInput } from './club-member-create-or-connect-without-user.input';
import { ClubMemberCreateManyUserInputEnvelope } from './club-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';

@InputType()
export class ClubMemberUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ClubMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberCreateWithoutUserInput)
    create?: Array<ClubMemberCreateWithoutUserInput>;

    @Field(() => [ClubMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ClubMemberCreateOrConnectWithoutUserInput>;

    @Field(() => ClubMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ClubMemberCreateManyUserInputEnvelope)
    createMany?: ClubMemberCreateManyUserInputEnvelope;

    @Field(() => [ClubMemberWhereUniqueInput], {nullable:true})
    @Type(() => ClubMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>>;
}
