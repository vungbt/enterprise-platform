import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserRoleUpdateManyWithoutUserNestedInput } from '../user-role/user-role-update-many-without-user-nested.input';
import { EmployeeUpdateManyWithoutUserNestedInput } from '../employee/employee-update-many-without-user-nested.input';
import { CustomerUpdateManyWithoutOwnerNestedInput } from '../customer/customer-update-many-without-owner-nested.input';
import { ClubMemberUpdateManyWithoutUserNestedInput } from '../club-member/club-member-update-many-without-user-nested.input';
import { ClubUpdateManyWithoutCreatedByNestedInput } from '../club/club-update-many-without-created-by-nested.input';
import { ExpenseUpdateManyWithoutCreatedByNestedInput } from '../expense/expense-update-many-without-created-by-nested.input';
import { FundContributionUpdateManyWithoutMemberNestedInput } from '../fund-contribution/fund-contribution-update-many-without-member-nested.input';
import { FundTransactionUpdateManyWithoutCreatedByNestedInput } from '../fund-transaction/fund-transaction-update-many-without-created-by-nested.input';

@InputType()
export class UserUpdateWithoutConfirmedContributionsInput {

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

    @Field(() => UserRoleUpdateManyWithoutUserNestedInput, {nullable:true})
    roles?: UserRoleUpdateManyWithoutUserNestedInput;

    @Field(() => EmployeeUpdateManyWithoutUserNestedInput, {nullable:true})
    employees?: EmployeeUpdateManyWithoutUserNestedInput;

    @Field(() => CustomerUpdateManyWithoutOwnerNestedInput, {nullable:true})
    ownedCustomers?: CustomerUpdateManyWithoutOwnerNestedInput;

    @Field(() => ClubMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    clubMemberships?: ClubMemberUpdateManyWithoutUserNestedInput;

    @Field(() => ClubUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    ownedClubs?: ClubUpdateManyWithoutCreatedByNestedInput;

    @Field(() => ExpenseUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutCreatedByNestedInput;

    @Field(() => FundContributionUpdateManyWithoutMemberNestedInput, {nullable:true})
    fundContributions?: FundContributionUpdateManyWithoutMemberNestedInput;

    @Field(() => FundTransactionUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    fundTransactions?: FundTransactionUpdateManyWithoutCreatedByNestedInput;
}
