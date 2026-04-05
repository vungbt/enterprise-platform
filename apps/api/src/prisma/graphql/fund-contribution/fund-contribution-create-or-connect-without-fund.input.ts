import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionCreateWithoutFundInput } from './fund-contribution-create-without-fund.input';

@InputType()
export class FundContributionCreateOrConnectWithoutFundInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionCreateWithoutFundInput, {nullable:false})
    @Type(() => FundContributionCreateWithoutFundInput)
    create!: FundContributionCreateWithoutFundInput;
}
