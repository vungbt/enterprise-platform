import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionStatus } from '../prisma/fund-contribution-status.enum';
import { ClubFundUpdateOneRequiredWithoutContributionsNestedInput } from '../club-fund/club-fund-update-one-required-without-contributions-nested.input';
import { UserUpdateOneRequiredWithoutFundContributionsNestedInput } from '../user/user-update-one-required-without-fund-contributions-nested.input';
import { UserUpdateOneWithoutConfirmedContributionsNestedInput } from '../user/user-update-one-without-confirmed-contributions-nested.input';
import { FundTransactionUpdateManyWithoutContributionNestedInput } from '../fund-transaction/fund-transaction-update-many-without-contribution-nested.input';

@InputType()
export class FundContributionUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    month?: number;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => FundContributionStatus, {nullable:true})
    status?: `${FundContributionStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubFundUpdateOneRequiredWithoutContributionsNestedInput, {nullable:true})
    fund?: ClubFundUpdateOneRequiredWithoutContributionsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFundContributionsNestedInput, {nullable:true})
    member?: UserUpdateOneRequiredWithoutFundContributionsNestedInput;

    @Field(() => UserUpdateOneWithoutConfirmedContributionsNestedInput, {nullable:true})
    confirmedByUser?: UserUpdateOneWithoutConfirmedContributionsNestedInput;

    @Field(() => FundTransactionUpdateManyWithoutContributionNestedInput, {nullable:true})
    transactions?: FundTransactionUpdateManyWithoutContributionNestedInput;
}
