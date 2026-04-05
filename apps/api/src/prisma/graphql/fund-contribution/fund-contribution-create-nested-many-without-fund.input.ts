import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutFundInput } from './fund-contribution-create-without-fund.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutFundInput } from './fund-contribution-create-or-connect-without-fund.input';
import { FundContributionCreateManyFundInputEnvelope } from './fund-contribution-create-many-fund-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';

@InputType()
export class FundContributionCreateNestedManyWithoutFundInput {

    @Field(() => [FundContributionCreateWithoutFundInput], {nullable:true})
    @Type(() => FundContributionCreateWithoutFundInput)
    create?: Array<FundContributionCreateWithoutFundInput>;

    @Field(() => [FundContributionCreateOrConnectWithoutFundInput], {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutFundInput)
    connectOrCreate?: Array<FundContributionCreateOrConnectWithoutFundInput>;

    @Field(() => FundContributionCreateManyFundInputEnvelope, {nullable:true})
    @Type(() => FundContributionCreateManyFundInputEnvelope)
    createMany?: FundContributionCreateManyFundInputEnvelope;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;
}
