import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from '../prisma/fund-transaction-type.enum';
import { FundFlow } from '../prisma/fund-flow.enum';
import { Float } from '@nestjs/graphql';
import { ClubFundCreateNestedOneWithoutTransactionsInput } from '../club-fund/club-fund-create-nested-one-without-transactions.input';
import { FundContributionCreateNestedOneWithoutTransactionsInput } from '../fund-contribution/fund-contribution-create-nested-one-without-transactions.input';
import { ExpenseCreateNestedOneWithoutFundTransactionsInput } from '../expense/expense-create-nested-one-without-fund-transactions.input';
import { UserCreateNestedOneWithoutFundTransactionsInput } from '../user/user-create-nested-one-without-fund-transactions.input';

@InputType()
export class FundTransactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
    refTransactionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ClubFundCreateNestedOneWithoutTransactionsInput, {nullable:false})
    fund!: ClubFundCreateNestedOneWithoutTransactionsInput;

    @Field(() => FundContributionCreateNestedOneWithoutTransactionsInput, {nullable:true})
    contribution?: FundContributionCreateNestedOneWithoutTransactionsInput;

    @Field(() => ExpenseCreateNestedOneWithoutFundTransactionsInput, {nullable:true})
    expense?: ExpenseCreateNestedOneWithoutFundTransactionsInput;

    @Field(() => UserCreateNestedOneWithoutFundTransactionsInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutFundTransactionsInput;
}
