import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FundTransactionType } from '../prisma/fund-transaction-type.enum';
import { FundFlow } from '../prisma/fund-flow.enum';
import { Float } from '@nestjs/graphql';
import { ClubFund } from '../club-fund/club-fund.model';
import { FundContribution } from '../fund-contribution/fund-contribution.model';
import { Expense } from '../expense/expense.model';
import { User } from '../user/user.model';

@ObjectType()
export class FundTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

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
    note!: string | null;

    @Field(() => String, {nullable:true})
    refContribId!: string | null;

    @Field(() => String, {nullable:true})
    refExpenseId!: string | null;

    @Field(() => String, {nullable:true})
    refTransactionId!: string | null;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ClubFund, {nullable:false})
    fund?: ClubFund;

    @Field(() => FundContribution, {nullable:true})
    contribution?: FundContribution | null;

    @Field(() => Expense, {nullable:true})
    expense?: Expense | null;

    @Field(() => User, {nullable:false})
    createdBy?: User;
}
