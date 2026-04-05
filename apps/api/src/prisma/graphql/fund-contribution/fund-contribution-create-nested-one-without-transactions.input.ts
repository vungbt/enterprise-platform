import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutTransactionsInput } from './fund-contribution-create-without-transactions.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutTransactionsInput } from './fund-contribution-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';

@InputType()
export class FundContributionCreateNestedOneWithoutTransactionsInput {

    @Field(() => FundContributionCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => FundContributionCreateWithoutTransactionsInput)
    create?: FundContributionCreateWithoutTransactionsInput;

    @Field(() => FundContributionCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: FundContributionCreateOrConnectWithoutTransactionsInput;

    @Field(() => FundContributionWhereUniqueInput, {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;
}
