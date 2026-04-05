import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from '../prisma/fund-transaction-type.enum';
import { FundFlow } from '../prisma/fund-flow.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class FundTransactionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => FundTransactionType, {nullable:false})
    type!: `${FundTransactionType}`;

    @Field(() => FundFlow, {nullable:false})
    flow!: `${FundFlow}`;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    balanceAfter!: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    refContribId?: string;

    @Field(() => String, {nullable:true})
    refExpenseId?: string;

    @Field(() => String, {nullable:true})
    refTransactionId?: string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
