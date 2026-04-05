import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from '../prisma/fund-transaction-type.enum';
import { FundFlow } from '../prisma/fund-flow.enum';
import { Float } from '@nestjs/graphql';
import { ClubFundUpdateOneRequiredWithoutTransactionsNestedInput } from '../club-fund/club-fund-update-one-required-without-transactions-nested.input';
import { ExpenseUpdateOneWithoutFundTransactionsNestedInput } from '../expense/expense-update-one-without-fund-transactions-nested.input';
import { UserUpdateOneRequiredWithoutFundTransactionsNestedInput } from '../user/user-update-one-required-without-fund-transactions-nested.input';

@InputType()
export class FundTransactionUpdateWithoutContributionInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
    refTransactionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ClubFundUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    fund?: ClubFundUpdateOneRequiredWithoutTransactionsNestedInput;

    @Field(() => ExpenseUpdateOneWithoutFundTransactionsNestedInput, {nullable:true})
    expense?: ExpenseUpdateOneWithoutFundTransactionsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFundTransactionsNestedInput, {nullable:true})
    createdBy?: UserUpdateOneRequiredWithoutFundTransactionsNestedInput;
}
