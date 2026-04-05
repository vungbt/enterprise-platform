import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubMemberCreateWithoutUserInput } from './club-member-create-without-user.input';
import { Type } from 'class-transformer';
import { ClubMemberCreateOrConnectWithoutUserInput } from './club-member-create-or-connect-without-user.input';
import { ClubMemberUpsertWithWhereUniqueWithoutUserInput } from './club-member-upsert-with-where-unique-without-user.input';
import { ClubMemberCreateManyUserInputEnvelope } from './club-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClubMemberWhereUniqueInput } from './club-member-where-unique.input';
import { ClubMemberUpdateWithWhereUniqueWithoutUserInput } from './club-member-update-with-where-unique-without-user.input';
import { ClubMemberUpdateManyWithWhereWithoutUserInput } from './club-member-update-many-with-where-without-user.input';
import { ClubMemberScalarWhereInput } from './club-member-scalar-where.input';

@InputType()
export class ClubMemberUpdateManyWithoutUserNestedInput {

    @Field(() => [ClubMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberCreateWithoutUserInput)
    create?: Array<ClubMemberCreateWithoutUserInput>;

    @Field(() => [ClubMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ClubMemberCreateOrConnectWithoutUserInput>;

    @Field(() => [ClubMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ClubMemberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ClubMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ClubMemberCreateManyUserInputEnvelope)
    createMany?: ClubMemberCreateManyUserInputEnvelope;

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

    @Field(() => [ClubMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ClubMemberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ClubMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ClubMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ClubMemberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ClubMemberScalarWhereInput], {nullable:true})
    @Type(() => ClubMemberScalarWhereInput)
    deleteMany?: Array<ClubMemberScalarWhereInput>;
}
