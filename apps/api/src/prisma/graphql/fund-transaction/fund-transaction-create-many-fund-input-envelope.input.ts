import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateManyFundInput } from './fund-transaction-create-many-fund.input';
import { Type } from 'class-transformer';

@InputType()
export class FundTransactionCreateManyFundInputEnvelope {

    @Field(() => [FundTransactionCreateManyFundInput], {nullable:false})
    @Type(() => FundTransactionCreateManyFundInput)
    data!: Array<FundTransactionCreateManyFundInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
