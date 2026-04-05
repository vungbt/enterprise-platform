import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundTransactionUpdateManyMutationInput } from './fund-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FundTransactionWhereInput } from './fund-transaction-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFundTransactionArgs {

    @Field(() => FundTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => FundTransactionUpdateManyMutationInput)
    data!: FundTransactionUpdateManyMutationInput;

    @Field(() => FundTransactionWhereInput, {nullable:true})
    @Type(() => FundTransactionWhereInput)
    where?: FundTransactionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
