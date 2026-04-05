import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInput } from '../user-role/user-role-unchecked-update-many-without-user-nested.input';
import { EmployeeUncheckedUpdateManyWithoutUserNestedInput } from '../employee/employee-unchecked-update-many-without-user-nested.input';
import { CustomerUncheckedUpdateManyWithoutOwnerNestedInput } from '../customer/customer-unchecked-update-many-without-owner-nested.input';
import { ClubMemberUncheckedUpdateManyWithoutUserNestedInput } from '../club-member/club-member-unchecked-update-many-without-user-nested.input';
import { ClubUncheckedUpdateManyWithoutCreatedByNestedInput } from '../club/club-unchecked-update-many-without-created-by-nested.input';
import { ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput } from '../expense/expense-unchecked-update-many-without-created-by-nested.input';
import { FundContributionUncheckedUpdateManyWithoutMemberNestedInput } from '../fund-contribution/fund-contribution-unchecked-update-many-without-member-nested.input';
import { FundTransactionUncheckedUpdateManyWithoutCreatedByNestedInput } from '../fund-transaction/fund-transaction-unchecked-update-many-without-created-by-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutConfirmedContributionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @HideField()
    password?: string;

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

    @Field(() => UserRoleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    ownedCustomers?: CustomerUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => ClubMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    clubMemberships?: ClubMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ClubUncheckedUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    ownedClubs?: ClubUncheckedUpdateManyWithoutCreatedByNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput;

    @Field(() => FundContributionUncheckedUpdateManyWithoutMemberNestedInput, {nullable:true})
    fundContributions?: FundContributionUncheckedUpdateManyWithoutMemberNestedInput;

    @Field(() => FundTransactionUncheckedUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    fundTransactions?: FundTransactionUncheckedUpdateManyWithoutCreatedByNestedInput;
}
