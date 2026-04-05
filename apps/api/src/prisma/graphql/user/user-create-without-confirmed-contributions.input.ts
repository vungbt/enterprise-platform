import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutUserInput } from '../user-role/user-role-create-nested-many-without-user.input';
import { EmployeeCreateNestedManyWithoutUserInput } from '../employee/employee-create-nested-many-without-user.input';
import { CustomerCreateNestedManyWithoutOwnerInput } from '../customer/customer-create-nested-many-without-owner.input';
import { ClubMemberCreateNestedManyWithoutUserInput } from '../club-member/club-member-create-nested-many-without-user.input';
import { ClubCreateNestedManyWithoutCreatedByInput } from '../club/club-create-nested-many-without-created-by.input';
import { ExpenseCreateNestedManyWithoutCreatedByInput } from '../expense/expense-create-nested-many-without-created-by.input';
import { FundContributionCreateNestedManyWithoutMemberInput } from '../fund-contribution/fund-contribution-create-nested-many-without-member.input';
import { FundTransactionCreateNestedManyWithoutCreatedByInput } from '../fund-transaction/fund-transaction-create-nested-many-without-created-by.input';

@InputType()
export class UserCreateWithoutConfirmedContributionsInput {

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

    @Field(() => UserRoleCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: UserRoleCreateNestedManyWithoutUserInput;

    @Field(() => EmployeeCreateNestedManyWithoutUserInput, {nullable:true})
    employees?: EmployeeCreateNestedManyWithoutUserInput;

    @Field(() => CustomerCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedCustomers?: CustomerCreateNestedManyWithoutOwnerInput;

    @Field(() => ClubMemberCreateNestedManyWithoutUserInput, {nullable:true})
    clubMemberships?: ClubMemberCreateNestedManyWithoutUserInput;

    @Field(() => ClubCreateNestedManyWithoutCreatedByInput, {nullable:true})
    ownedClubs?: ClubCreateNestedManyWithoutCreatedByInput;

    @Field(() => ExpenseCreateNestedManyWithoutCreatedByInput, {nullable:true})
    expenses?: ExpenseCreateNestedManyWithoutCreatedByInput;

    @Field(() => FundContributionCreateNestedManyWithoutMemberInput, {nullable:true})
    fundContributions?: FundContributionCreateNestedManyWithoutMemberInput;

    @Field(() => FundTransactionCreateNestedManyWithoutCreatedByInput, {nullable:true})
    fundTransactions?: FundTransactionCreateNestedManyWithoutCreatedByInput;
}
