import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeeUncheckedCreateNestedManyWithoutUserInput } from '../employee/employee-unchecked-create-nested-many-without-user.input';
import { CustomerUncheckedCreateNestedManyWithoutOwnerInput } from '../customer/customer-unchecked-create-nested-many-without-owner.input';
import { ClubMemberUncheckedCreateNestedManyWithoutUserInput } from '../club-member/club-member-unchecked-create-nested-many-without-user.input';
import { ClubUncheckedCreateNestedManyWithoutCreatedByInput } from '../club/club-unchecked-create-nested-many-without-created-by.input';
import { ExpenseUncheckedCreateNestedManyWithoutCreatedByInput } from '../expense/expense-unchecked-create-nested-many-without-created-by.input';
import { FundContributionUncheckedCreateNestedManyWithoutMemberInput } from '../fund-contribution/fund-contribution-unchecked-create-nested-many-without-member.input';
import { FundContributionUncheckedCreateNestedManyWithoutConfirmedByUserInput } from '../fund-contribution/fund-contribution-unchecked-create-nested-many-without-confirmed-by-user.input';
import { FundTransactionUncheckedCreateNestedManyWithoutCreatedByInput } from '../fund-transaction/fund-transaction-unchecked-create-nested-many-without-created-by.input';

@InputType()
export class UserUncheckedCreateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedCustomers?: CustomerUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => ClubMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    clubMemberships?: ClubMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ClubUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    ownedClubs?: ClubUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => ExpenseUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => FundContributionUncheckedCreateNestedManyWithoutMemberInput, {nullable:true})
    fundContributions?: FundContributionUncheckedCreateNestedManyWithoutMemberInput;

    @Field(() => FundContributionUncheckedCreateNestedManyWithoutConfirmedByUserInput, {nullable:true})
    confirmedContributions?: FundContributionUncheckedCreateNestedManyWithoutConfirmedByUserInput;

    @Field(() => FundTransactionUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    fundTransactions?: FundTransactionUncheckedCreateNestedManyWithoutCreatedByInput;
}
