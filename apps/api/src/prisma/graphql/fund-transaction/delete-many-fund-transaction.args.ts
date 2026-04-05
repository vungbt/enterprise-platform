import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionWhereInput } from './fund-transaction-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFundTransactionArgs {

    @Field(() => FundTransactionWhereInput, {nullable:true})
    @Type(() => FundTransactionWhereInput)
    where?: FundTransactionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
