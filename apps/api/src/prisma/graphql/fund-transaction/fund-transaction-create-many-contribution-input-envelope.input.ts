import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateManyContributionInput } from './fund-transaction-create-many-contribution.input';
import { Type } from 'class-transformer';

@InputType()
export class FundTransactionCreateManyContributionInputEnvelope {

    @Field(() => [FundTransactionCreateManyContributionInput], {nullable:false})
    @Type(() => FundTransactionCreateManyContributionInput)
    data!: Array<FundTransactionCreateManyContributionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
