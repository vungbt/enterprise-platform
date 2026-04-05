import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionStatus } from '../prisma/fund-contribution-status.enum';

@InputType()
export class FundContributionUncheckedCreateWithoutTransactionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => String, {nullable:false})
    memberId!: string;

    @Field(() => Int, {nullable:true})
    month?: number;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:false})
    paidAt!: Date | string;

    @Field(() => FundContributionStatus, {nullable:true})
    status?: `${FundContributionStatus}`;

    @Field(() => String, {nullable:true})
    confirmedBy?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
