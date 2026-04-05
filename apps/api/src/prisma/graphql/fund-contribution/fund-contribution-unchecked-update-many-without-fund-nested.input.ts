import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutFundInput } from './fund-contribution-create-without-fund.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutFundInput } from './fund-contribution-create-or-connect-without-fund.input';
import { FundContributionUpsertWithWhereUniqueWithoutFundInput } from './fund-contribution-upsert-with-where-unique-without-fund.input';
import { FundContributionCreateManyFundInputEnvelope } from './fund-contribution-create-many-fund-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { FundContributionUpdateWithWhereUniqueWithoutFundInput } from './fund-contribution-update-with-where-unique-without-fund.input';
import { FundContributionUpdateManyWithWhereWithoutFundInput } from './fund-contribution-update-many-with-where-without-fund.input';
import { FundContributionScalarWhereInput } from './fund-contribution-scalar-where.input';

@InputType()
export class FundContributionUncheckedUpdateManyWithoutFundNestedInput {

    @Field(() => [FundContributionCreateWithoutFundInput], {nullable:true})
    @Type(() => FundContributionCreateWithoutFundInput)
    create?: Array<FundContributionCreateWithoutFundInput>;

    @Field(() => [FundContributionCreateOrConnectWithoutFundInput], {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutFundInput)
    connectOrCreate?: Array<FundContributionCreateOrConnectWithoutFundInput>;

    @Field(() => [FundContributionUpsertWithWhereUniqueWithoutFundInput], {nullable:true})
    @Type(() => FundContributionUpsertWithWhereUniqueWithoutFundInput)
    upsert?: Array<FundContributionUpsertWithWhereUniqueWithoutFundInput>;

    @Field(() => FundContributionCreateManyFundInputEnvelope, {nullable:true})
    @Type(() => FundContributionCreateManyFundInputEnvelope)
    createMany?: FundContributionCreateManyFundInputEnvelope;

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

    @Field(() => [FundContributionUpdateWithWhereUniqueWithoutFundInput], {nullable:true})
    @Type(() => FundContributionUpdateWithWhereUniqueWithoutFundInput)
    update?: Array<FundContributionUpdateWithWhereUniqueWithoutFundInput>;

    @Field(() => [FundContributionUpdateManyWithWhereWithoutFundInput], {nullable:true})
    @Type(() => FundContributionUpdateManyWithWhereWithoutFundInput)
    updateMany?: Array<FundContributionUpdateManyWithWhereWithoutFundInput>;

    @Field(() => [FundContributionScalarWhereInput], {nullable:true})
    @Type(() => FundContributionScalarWhereInput)
    deleteMany?: Array<FundContributionScalarWhereInput>;
}
