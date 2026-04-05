import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberCreateWithoutClubInput } from './club-member-create-without-club.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateOrConnectWithoutClubInput } from './club-member-create-or-connect-without-club.input';
import { ClubMemberUpsertWithWhereUniqueWithoutClubInput } from './club-member-upsert-with-where-unique-without-club.input';
import { ClubMemberCreateManyClubInputEnvelope } from './club-member-create-many-club-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { ClubMemberUpdateWithWhereUniqueWithoutClubInput } from './club-member-update-with-where-unique-without-club.input';
import { ClubMemberUpdateManyWithWhereWithoutClubInput } from './club-member-update-many-with-where-without-club.input';
import { ClubMemberScalarWhereInput } from './club-member-scalar-where.input';

@InputType()
export class ClubMemberUpdateManyWithoutClubNestedInput {

    @Field(() => [ClubMemberCreateWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberCreateWithoutClubInput)
    create?: Array<ClubMemberCreateWithoutClubInput>;

    @Field(() => [ClubMemberCreateOrConnectWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberCreateOrConnectWithoutClubInput)
    connectOrCreate?: Array<ClubMemberCreateOrConnectWithoutClubInput>;

    @Field(() => [ClubMemberUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberUpsertWithWhereUniqueWithoutClubInput)
    upsert?: Array<ClubMemberUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => ClubMemberCreateManyClubInputEnvelope, {nullable:true})
    @Type(() => ClubMemberCreateManyClubInputEnvelope)
    createMany?: ClubMemberCreateManyClubInputEnvelope;

    @Field(() => [ClubMemberWhereUniqueInput], {nullable:true})
    @Type(() => ClubMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>>;

    @Field(() => [ClubMemberWhereUniqueInput], {nullable:true})
    @Type(() => ClubMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>>;

    @Field(() => [ClubMemberWhereUniqueInput], {nullable:true})
    @Type(() => ClubMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>>;

    @Field(() => [ClubMemberWhereUniqueInput], {nullable:true})
    @Type(() => ClubMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClubMemberWhereUniqueInput, 'clubId_userId'>>;

    @Field(() => [ClubMemberUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberUpdateWithWhereUniqueWithoutClubInput)
    update?: Array<ClubMemberUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [ClubMemberUpdateManyWithWhereWithoutClubInput], {nullable:true})
    @Type(() => ClubMemberUpdateManyWithWhereWithoutClubInput)
    updateMany?: Array<ClubMemberUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [ClubMemberScalarWhereInput], {nullable:true})
    @Type(() => ClubMemberScalarWhereInput)
    deleteMany?: Array<ClubMemberScalarWhereInput>;
}
