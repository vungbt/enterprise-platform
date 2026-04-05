import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionCreateWithoutTransactionsInput } from './fund-contribution-create-without-transactions.input';

@InputType()
export class FundContributionCreateOrConnectWithoutTransactionsInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => FundContributionCreateWithoutTransactionsInput)
    create!: FundContributionCreateWithoutTransactionsInput;
}
