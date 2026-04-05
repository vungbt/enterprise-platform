import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionUpdateManyWithoutFundNestedInput } from '../fund-contribution/fund-contribution-update-many-without-fund-nested.input';
import { ExpenseUpdateManyWithoutFundNestedInput } from '../expense/expense-update-many-without-fund-nested.input';
import { FundTransactionUpdateManyWithoutFundNestedInput } from '../fund-transaction/fund-transaction-update-many-without-fund-nested.input';

@InputType()
export class ClubFundUpdateWithoutClubInput {

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

    @Field(() => FundContributionUpdateManyWithoutFundNestedInput, {nullable:true})
    contributions?: FundContributionUpdateManyWithoutFundNestedInput;

    @Field(() => ExpenseUpdateManyWithoutFundNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutFundNestedInput;

    @Field(() => FundTransactionUpdateManyWithoutFundNestedInput, {nullable:true})
    transactions?: FundTransactionUpdateManyWithoutFundNestedInput;
}
