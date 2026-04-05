import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberCreateWithoutClubInput } from './club-member-create-without-club.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateOrConnectWithoutClubInput } from './club-member-create-or-connect-without-club.input';
import { ClubMemberCreateManyClubInputEnvelope } from './club-member-create-many-club-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';

@InputType()
export class ClubMemberCreateNestedManyWithoutClubInput {

    @Field(() => [ClubMemberCreateWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberCreateWithoutClubInput)
    create?: Array<ClubMemberCreateWithoutClubInput>;

    @Field(() => [ClubMemberCreateOrConnectWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberCreateOrConnectWithoutClubInput)
    connectOrCreate?: Array<ClubMemberCreateOrConnectWithoutClubInput>;

    @Field(() => ClubMemberCreateManyClubInputEnvelope, {nullable:true})
    @Type(() => ClubMemberCreateManyClubInputEnvelope)
    createMany?: ClubMemberCreateManyClubInputEnvelope;

    @Field(() => [ClubMemberWhereUniqueInput], {nullable:true})
    @Type(() => ClubMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>>;
}
