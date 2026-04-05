import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ExpenseStatus } from '../prisma/expense-status.enum';
import { ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput } from '../expense-category/expense-category-update-one-required-without-expenses-nested.input';
import { UserUpdateOneRequiredWithoutExpensesNestedInput } from '../user/user-update-one-required-without-expenses-nested.input';
import { DepartmentUpdateOneWithoutExpensesNestedInput } from '../department/department-update-one-without-expenses-nested.input';
import { ClubFundUpdateOneWithoutExpensesNestedInput } from '../club-fund/club-fund-update-one-without-expenses-nested.input';
import { FundTransactionUpdateManyWithoutExpenseNestedInput } from '../fund-transaction/fund-transaction-update-many-without-expense-nested.input';

@InputType()
export class ExpenseUpdateWithoutClubInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => ExpenseStatus, {nullable:true})
    status?: `${ExpenseStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput, {nullable:true})
    category?: ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutExpensesNestedInput, {nullable:true})
    createdBy?: UserUpdateOneRequiredWithoutExpensesNestedInput;

    @Field(() => DepartmentUpdateOneWithoutExpensesNestedInput, {nullable:true})
    department?: DepartmentUpdateOneWithoutExpensesNestedInput;

    @Field(() => ClubFundUpdateOneWithoutExpensesNestedInput, {nullable:true})
    fund?: ClubFundUpdateOneWithoutExpensesNestedInput;

    @Field(() => FundTransactionUpdateManyWithoutExpenseNestedInput, {nullable:true})
    fundTransactions?: FundTransactionUpdateManyWithoutExpenseNestedInput;
}
