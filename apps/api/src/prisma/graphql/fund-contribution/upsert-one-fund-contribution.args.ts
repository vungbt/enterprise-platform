import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionCreateInput } from './fund-contribution-create.input';
import { FundContributionUpdateInput } from './fund-contribution-update.input';

@ArgsType()
export class UpsertOneFundContributionArgs {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionCreateInput, {nullable:false})
    @Type(() => FundContributionCreateInput)
    create!: FundContributionCreateInput;

    @Field(() => FundContributionUpdateInput, {nullable:false})
    @Type(() => FundContributionUpdateInput)
    update!: FundContributionUpdateInput;
}
