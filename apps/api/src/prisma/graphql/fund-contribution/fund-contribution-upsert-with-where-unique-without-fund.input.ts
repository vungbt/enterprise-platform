import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionUpdateWithoutFundInput } from './fund-contribution-update-without-fund.input';
import { FundContributionCreateWithoutFundInput } from './fund-contribution-create-without-fund.input';

@InputType()
export class FundContributionUpsertWithWhereUniqueWithoutFundInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionUpdateWithoutFundInput, {nullable:false})
    @Type(() => FundContributionUpdateWithoutFundInput)
    update!: FundContributionUpdateWithoutFundInput;

    @Field(() => FundContributionCreateWithoutFundInput, {nullable:false})
    @Type(() => FundContributionCreateWithoutFundInput)
    create!: FundContributionCreateWithoutFundInput;
}
