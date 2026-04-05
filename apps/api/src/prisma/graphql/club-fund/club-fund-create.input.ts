import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ClubCreateNestedOneWithoutFundInput } from '../club/club-create-nested-one-without-fund.input';
import { FundContributionCreateNestedManyWithoutFundInput } from '../fund-contribution/fund-contribution-create-nested-many-without-fund.input';
import { ExpenseCreateNestedManyWithoutFundInput } from '../expense/expense-create-nested-many-without-fund.input';
import { FundTransactionCreateNestedManyWithoutFundInput } from '../fund-transaction/fund-transaction-create-nested-many-without-fund.input';

@InputType()
export class ClubFundCreateInput {

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

    @Field(() => ClubCreateNestedOneWithoutFundInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutFundInput;

    @Field(() => FundContributionCreateNestedManyWithoutFundInput, {nullable:true})
    contributions?: FundContributionCreateNestedManyWithoutFundInput;

    @Field(() => ExpenseCreateNestedManyWithoutFundInput, {nullable:true})
    expenses?: ExpenseCreateNestedManyWithoutFundInput;

    @Field(() => FundTransactionCreateNestedManyWithoutFundInput, {nullable:true})
    transactions?: FundTransactionCreateNestedManyWithoutFundInput;
}
