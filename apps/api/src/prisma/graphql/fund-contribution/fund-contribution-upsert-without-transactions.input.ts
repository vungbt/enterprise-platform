import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionUpdateWithoutTransactionsInput } from './fund-contribution-update-without-transactions.input';
import { Type } from 'class-transformer';
import { FundContributionCreateWithoutTransactionsInput } from './fund-contribution-create-without-transactions.input';
import { FundContributionWhereInput } from './fund-contribution-where.input';

@InputType()
export class FundContributionUpsertWithoutTransactionsInput {

    @Field(() => FundContributionUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => FundContributionUpdateWithoutTransactionsInput)
    update!: FundContributionUpdateWithoutTransactionsInput;

    @Field(() => FundContributionCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => FundContributionCreateWithoutTransactionsInput)
    create!: FundContributionCreateWithoutTransactionsInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    where?: FundContributionWhereInput;
}
