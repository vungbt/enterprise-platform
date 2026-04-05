import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionUncheckedUpdateManyWithoutFundNestedInput } from '../fund-contribution/fund-contribution-unchecked-update-many-without-fund-nested.input';
import { ExpenseUncheckedUpdateManyWithoutFundNestedInput } from '../expense/expense-unchecked-update-many-without-fund-nested.input';
import { FundTransactionUncheckedUpdateManyWithoutFundNestedInput } from '../fund-transaction/fund-transaction-unchecked-update-many-without-fund-nested.input';

@InputType()
export class ClubFundUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    clubId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    initialBalance?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => FundContributionUncheckedUpdateManyWithoutFundNestedInput, {nullable:true})
    contributions?: FundContributionUncheckedUpdateManyWithoutFundNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutFundNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutFundNestedInput;

    @Field(() => FundTransactionUncheckedUpdateManyWithoutFundNestedInput, {nullable:true})
    transactions?: FundTransactionUncheckedUpdateManyWithoutFundNestedInput;
}
