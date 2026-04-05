import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ExpenseStatus } from '../prisma/expense-status.enum';
import { FundTransactionUncheckedUpdateManyWithoutExpenseNestedInput } from '../fund-transaction/fund-transaction-unchecked-update-many-without-expense-nested.input';

@InputType()
export class ExpenseUncheckedUpdateWithoutClubInput {

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

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => String, {nullable:true})
    fundId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => FundTransactionUncheckedUpdateManyWithoutExpenseNestedInput, {nullable:true})
    fundTransactions?: FundTransactionUncheckedUpdateManyWithoutExpenseNestedInput;
}
