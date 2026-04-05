import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionWhereInput } from './fund-transaction-where.input';

@InputType()
export class FundTransactionListRelationFilter {

    @Field(() => FundTransactionWhereInput, {nullable:true})
    every?: FundTransactionWhereInput;

    @Field(() => FundTransactionWhereInput, {nullable:true})
    some?: FundTransactionWhereInput;

    @Field(() => FundTransactionWhereInput, {nullable:true})
    none?: FundTransactionWhereInput;
}
