import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionUncheckedCreateNestedManyWithoutFundInput } from '../fund-contribution/fund-contribution-unchecked-create-nested-many-without-fund.input';
import { ExpenseUncheckedCreateNestedManyWithoutFundInput } from '../expense/expense-unchecked-create-nested-many-without-fund.input';
import { FundTransactionUncheckedCreateNestedManyWithoutFundInput } from '../fund-transaction/fund-transaction-unchecked-create-nested-many-without-fund.input';

@InputType()
export class ClubFundUncheckedCreateWithoutClubInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => FundContributionUncheckedCreateNestedManyWithoutFundInput, {nullable:true})
    contributions?: FundContributionUncheckedCreateNestedManyWithoutFundInput;

    @Field(() => ExpenseUncheckedCreateNestedManyWithoutFundInput, {nullable:true})
    expenses?: ExpenseUncheckedCreateNestedManyWithoutFundInput;

    @Field(() => FundTransactionUncheckedCreateNestedManyWithoutFundInput, {nullable:true})
    transactions?: FundTransactionUncheckedCreateNestedManyWithoutFundInput;
}
