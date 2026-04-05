import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionUpdateInput } from './fund-contribution-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';

@ArgsType()
export class UpdateOneFundContributionArgs {

    @Field(() => FundContributionUpdateInput, {nullable:false})
    @Type(() => FundContributionUpdateInput)
    data!: FundContributionUpdateInput;

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;
}
