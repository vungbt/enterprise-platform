import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ExpenseStatus } from '../prisma/expense-status.enum';
import { ExpenseCategoryCreateNestedOneWithoutExpensesInput } from '../expense-category/expense-category-create-nested-one-without-expenses.input';
import { UserCreateNestedOneWithoutExpensesInput } from '../user/user-create-nested-one-without-expenses.input';
import { ClubCreateNestedOneWithoutExpensesInput } from '../club/club-create-nested-one-without-expenses.input';
import { DepartmentCreateNestedOneWithoutExpensesInput } from '../department/department-create-nested-one-without-expenses.input';
import { ClubFundCreateNestedOneWithoutExpensesInput } from '../club-fund/club-fund-create-nested-one-without-expenses.input';
import { FundTransactionCreateNestedManyWithoutExpenseInput } from '../fund-transaction/fund-transaction-create-nested-many-without-expense.input';

@InputType()
export class ExpenseCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => ExpenseStatus, {nullable:true})
    status?: `${ExpenseStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ExpenseCategoryCreateNestedOneWithoutExpensesInput, {nullable:false})
    category!: ExpenseCategoryCreateNestedOneWithoutExpensesInput;

    @Field(() => UserCreateNestedOneWithoutExpensesInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutExpensesInput;

    @Field(() => ClubCreateNestedOneWithoutExpensesInput, {nullable:true})
    club?: ClubCreateNestedOneWithoutExpensesInput;

    @Field(() => DepartmentCreateNestedOneWithoutExpensesInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutExpensesInput;

    @Field(() => ClubFundCreateNestedOneWithoutExpensesInput, {nullable:true})
    fund?: ClubFundCreateNestedOneWithoutExpensesInput;

    @Field(() => FundTransactionCreateNestedManyWithoutExpenseInput, {nullable:true})
    fundTransactions?: FundTransactionCreateNestedManyWithoutExpenseInput;
}
