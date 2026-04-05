import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRoleListRelationFilter } from '../user-role/user-role-list-relation-filter.input';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
import { CustomerListRelationFilter } from '../customer/customer-list-relation-filter.input';
import { ClubMemberListRelationFilter } from '../club-member/club-member-list-relation-filter.input';
import { ClubListRelationFilter } from '../club/club-list-relation-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';
import { FundContributionListRelationFilter } from '../fund-contribution/fund-contribution-list-relation-filter.input';
import { FundTransactionListRelationFilter } from '../fund-transaction/fund-transaction-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => UserRoleListRelationFilter, {nullable:true})
    roles?: UserRoleListRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: EmployeeListRelationFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    ownedCustomers?: CustomerListRelationFilter;

    @Field(() => ClubMemberListRelationFilter, {nullable:true})
    clubMemberships?: ClubMemberListRelationFilter;

    @Field(() => ClubListRelationFilter, {nullable:true})
    ownedClubs?: ClubListRelationFilter;

    @Field(() => ExpenseListRelationFilter, {nullable:true})
    expenses?: ExpenseListRelationFilter;

    @Field(() => FundContributionListRelationFilter, {nullable:true})
    fundContributions?: FundContributionListRelationFilter;

    @Field(() => FundContributionListRelationFilter, {nullable:true})
    confirmedContributions?: FundContributionListRelationFilter;

    @Field(() => FundTransactionListRelationFilter, {nullable:true})
    fundTransactions?: FundTransactionListRelationFilter;
}
