import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FundContributionStatus } from '../prisma/fund-contribution-status.enum';
import { ClubFundCreateNestedOneWithoutContributionsInput } from '../club-fund/club-fund-create-nested-one-without-contributions.input';
import { UserCreateNestedOneWithoutFundContributionsInput } from '../user/user-create-nested-one-without-fund-contributions.input';
import { FundTransactionCreateNestedManyWithoutContributionInput } from '../fund-transaction/fund-transaction-create-nested-many-without-contribution.input';

@InputType()
export class FundContributionCreateWithoutConfirmedByUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubFundCreateNestedOneWithoutContributionsInput, {nullable:false})
    fund!: ClubFundCreateNestedOneWithoutContributionsInput;

    @Field(() => UserCreateNestedOneWithoutFundContributionsInput, {nullable:false})
    member!: UserCreateNestedOneWithoutFundContributionsInput;

    @Field(() => FundTransactionCreateNestedManyWithoutContributionInput, {nullable:true})
    transactions?: FundTransactionCreateNestedManyWithoutContributionInput;
}
