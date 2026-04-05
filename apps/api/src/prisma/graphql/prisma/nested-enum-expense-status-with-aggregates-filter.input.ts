import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseStatus } from './expense-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumExpenseStatusFilter } from './nested-enum-expense-status-filter.input';

@InputType()
export class NestedEnumExpenseStatusWithAggregatesFilter {

    @Field(() => ExpenseStatus, {nullable:true})
    equals?: `${ExpenseStatus}`;

    @Field(() => [ExpenseStatus], {nullable:true})
    in?: Array<`${ExpenseStatus}`>;

    @Field(() => [ExpenseStatus], {nullable:true})
    notIn?: Array<`${ExpenseStatus}`>;

    @Field(() => NestedEnumExpenseStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumExpenseStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumExpenseStatusFilter, {nullable:true})
    _min?: NestedEnumExpenseStatusFilter;

    @Field(() => NestedEnumExpenseStatusFilter, {nullable:true})
    _max?: NestedEnumExpenseStatusFilter;
}
