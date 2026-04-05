import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionCreateInput } from './fund-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFundTransactionArgs {

    @Field(() => FundTransactionCreateInput, {nullable:false})
    @Type(() => FundTransactionCreateInput)
    data!: FundTransactionCreateInput;
}
