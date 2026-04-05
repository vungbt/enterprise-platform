import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserRole } from '../user-role/user-role.model';
import { Employee } from '../employee/employee.model';
import { Customer } from '../customer/customer.model';
import { ClubMember } from '../club-member/club-member.model';
import { Club } from '../club/club.model';
import { Expense } from '../expense/expense.model';
import { FundContribution } from '../fund-contribution/fund-contribution.model';
import { FundTransaction } from '../fund-transaction/fund-transaction.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [UserRole], {nullable:true})
    roles?: Array<UserRole>;

    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;

    @Field(() => [Customer], {nullable:true})
    ownedCustomers?: Array<Customer>;

    @Field(() => [ClubMember], {nullable:true})
    clubMemberships?: Array<ClubMember>;

    @Field(() => [Club], {nullable:true})
    ownedClubs?: Array<Club>;

    @Field(() => [Expense], {nullable:true})
    expenses?: Array<Expense>;

    @Field(() => [FundContribution], {nullable:true})
    fundContributions?: Array<FundContribution>;

    @Field(() => [FundContribution], {nullable:true})
    confirmedContributions?: Array<FundContribution>;

    @Field(() => [FundTransaction], {nullable:true})
    fundTransactions?: Array<FundTransaction>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
