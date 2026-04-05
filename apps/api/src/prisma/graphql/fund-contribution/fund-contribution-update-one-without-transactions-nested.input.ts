import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutTransactionsInput } from './fund-contribution-create-without-transactions.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutTransactionsInput } from './fund-contribution-create-or-connect-without-transactions.input';
import { FundContributionUpsertWithoutTransactionsInput } from './fund-contribution-upsert-without-transactions.input';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { FundContributionUpdateToOneWithWhereWithoutTransactionsInput } from './fund-contribution-update-to-one-with-where-without-transactions.input';

@InputType()
export class FundContributionUpdateOneWithoutTransactionsNestedInput {

    @Field(() => FundContributionCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => FundContributionCreateWithoutTransactionsInput)
    create?: FundContributionCreateWithoutTransactionsInput;

    @Field(() => FundContributionCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: FundContributionCreateOrConnectWithoutTransactionsInput;

    @Field(() => FundContributionUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => FundContributionUpsertWithoutTransactionsInput)
    upsert?: FundContributionUpsertWithoutTransactionsInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    disconnect?: FundContributionWhereInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    delete?: FundContributionWhereInput;

    @Field(() => FundContributionWhereUniqueInput, {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => FundContributionUpdateToOneWithWhereWithoutTransactionsInput)
    update?: FundContributionUpdateToOneWithWhereWithoutTransactionsInput;
}
