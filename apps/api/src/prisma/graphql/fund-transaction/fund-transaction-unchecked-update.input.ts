import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from '../prisma/fund-transaction-type.enum';
import { FundFlow } from '../prisma/fund-flow.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class FundTransactionUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fundId?: string;

    @Field(() => FundTransactionType, {nullable:true})
    type?: `${FundTransactionType}`;

    @Field(() => FundFlow, {nullable:true})
    flow?: `${FundFlow}`;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    balanceAfter?: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    refContribId?: string;

    @Field(() => String, {nullable:true})
    refExpenseId?: string;

    @Field(() => String, {nullable:true})
    refTransactionId?: string;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
