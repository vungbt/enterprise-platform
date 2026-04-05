import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ExpenseStatus } from '../prisma/expense-status.enum';
import { ExpenseCategory } from '../expense-category/expense-category.model';
import { User } from '../user/user.model';
import { Club } from '../club/club.model';
import { Department } from '../department/department.model';
import { ClubFund } from '../club-fund/club-fund.model';
import { FundTransaction } from '../fund-transaction/fund-transaction.model';
import { ExpenseCount } from './expense-count.output';

@ObjectType()
export class Expense {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => ExpenseStatus, {defaultValue:'pending',nullable:false})
    status!: `${ExpenseStatus}`;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => String, {nullable:true})
    clubId!: string | null;

    @Field(() => String, {nullable:true})
    departmentId!: string | null;

    @Field(() => String, {nullable:true})
    fundId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => ExpenseCategory, {nullable:false})
    category?: ExpenseCategory;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => Club, {nullable:true})
    club?: Club | null;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => ClubFund, {nullable:true})
    fund?: ClubFund | null;

    @Field(() => [FundTransaction], {nullable:true})
    fundTransactions?: Array<FundTransaction>;

    @Field(() => ExpenseCount, {nullable:false})
    _count?: ExpenseCount;
}
