import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseStatus } from './expense-status.enum';
import { NestedEnumExpenseStatusFilter } from './nested-enum-expense-status-filter.input';

@InputType()
export class EnumExpenseStatusFilter {

    @Field(() => ExpenseStatus, {nullable:true})
    equals?: `${ExpenseStatus}`;

    @Field(() => [ExpenseStatus], {nullable:true})
    in?: Array<`${ExpenseStatus}`>;

    @Field(() => [ExpenseStatus], {nullable:true})
    notIn?: Array<`${ExpenseStatus}`>;

    @Field(() => NestedEnumExpenseStatusFilter, {nullable:true})
    not?: NestedEnumExpenseStatusFilter;
}
