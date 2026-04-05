import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutMemberInput } from './fund-contribution-create-without-member.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutMemberInput } from './fund-contribution-create-or-connect-without-member.input';
import { FundContributionUpsertWithWhereUniqueWithoutMemberInput } from './fund-contribution-upsert-with-where-unique-without-member.input';
import { FundContributionCreateManyMemberInputEnvelope } from './fund-contribution-create-many-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { FundContributionUpdateWithWhereUniqueWithoutMemberInput } from './fund-contribution-update-with-where-unique-without-member.input';
import { FundContributionUpdateManyWithWhereWithoutMemberInput } from './fund-contribution-update-many-with-where-without-member.input';
import { FundContributionScalarWhereInput } from './fund-contribution-scalar-where.input';

@InputType()
export class FundContributionUncheckedUpdateManyWithoutMemberNestedInput {

    @Field(() => [FundContributionCreateWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionCreateWithoutMemberInput)
    create?: Array<FundContributionCreateWithoutMemberInput>;

    @Field(() => [FundContributionCreateOrConnectWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutMemberInput)
    connectOrCreate?: Array<FundContributionCreateOrConnectWithoutMemberInput>;

    @Field(() => [FundContributionUpsertWithWhereUniqueWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionUpsertWithWhereUniqueWithoutMemberInput)
    upsert?: Array<FundContributionUpsertWithWhereUniqueWithoutMemberInput>;

    @Field(() => FundContributionCreateManyMemberInputEnvelope, {nullable:true})
    @Type(() => FundContributionCreateManyMemberInputEnvelope)
    createMany?: FundContributionCreateManyMemberInputEnvelope;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionUpdateWithWhereUniqueWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionUpdateWithWhereUniqueWithoutMemberInput)
    update?: Array<FundContributionUpdateWithWhereUniqueWithoutMemberInput>;

    @Field(() => [FundContributionUpdateManyWithWhereWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionUpdateManyWithWhereWithoutMemberInput)
    updateMany?: Array<FundContributionUpdateManyWithWhereWithoutMemberInput>;

    @Field(() => [FundContributionScalarWhereInput], {nullable:true})
    @Type(() => FundContributionScalarWhereInput)
    deleteMany?: Array<FundContributionScalarWhereInput>;
}
