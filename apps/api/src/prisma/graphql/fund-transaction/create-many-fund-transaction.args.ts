import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionCreateManyInput } from './fund-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFundTransactionArgs {

    @Field(() => [FundTransactionCreateManyInput], {nullable:false})
    @Type(() => FundTransactionCreateManyInput)
    data!: Array<FundTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
