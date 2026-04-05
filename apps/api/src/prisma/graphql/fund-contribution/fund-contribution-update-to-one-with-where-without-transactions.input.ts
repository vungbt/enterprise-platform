import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { Type } from 'class-transformer';
import { FundContributionUpdateWithoutTransactionsInput } from './fund-contribution-update-without-transactions.input';

@InputType()
export class FundContributionUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    where?: FundContributionWhereInput;

    @Field(() => FundContributionUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => FundContributionUpdateWithoutTransactionsInput)
    data!: FundContributionUpdateWithoutTransactionsInput;
}
