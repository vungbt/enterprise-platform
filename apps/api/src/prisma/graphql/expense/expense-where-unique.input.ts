import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumExpenseStatusFilter } from '../prisma/enum-expense-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ExpenseCategoryScalarRelationFilter } from '../expense-category/expense-category-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { ClubNullableScalarRelationFilter } from '../club/club-nullable-scalar-relation-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../department/department-nullable-scalar-relation-filter.input';
import { ClubFundNullableScalarRelationFilter } from '../club-fund/club-fund-nullable-scalar-relation-filter.input';
import { FundTransactionListRelationFilter } from '../fund-transaction/fund-transaction-list-relation-filter.input';

@InputType()
export class ExpenseWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ExpenseWhereInput], {nullable:true})
    AND?: Array<ExpenseWhereInput>;

    @Field(() => [ExpenseWhereInput], {nullable:true})
    OR?: Array<ExpenseWhereInput>;

    @Field(() => [ExpenseWhereInput], {nullable:true})
    NOT?: Array<ExpenseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => EnumExpenseStatusFilter, {nullable:true})
    status?: EnumExpenseStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    createdById?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    clubId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fundId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => ExpenseCategoryScalarRelationFilter, {nullable:true})
    category?: ExpenseCategoryScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    createdBy?: UserScalarRelationFilter;

    @Field(() => ClubNullableScalarRelationFilter, {nullable:true})
    club?: ClubNullableScalarRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    department?: DepartmentNullableScalarRelationFilter;

    @Field(() => ClubFundNullableScalarRelationFilter, {nullable:true})
    fund?: ClubFundNullableScalarRelationFilter;

    @Field(() => FundTransactionListRelationFilter, {nullable:true})
    fundTransactions?: FundTransactionListRelationFilter;
}
