import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DepartmentOrderByRelationAggregateInput } from './department-order-by-relation-aggregate.input';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';
import { ExpenseOrderByRelationAggregateInput } from '../expense/expense-order-by-relation-aggregate.input';

@InputType()
export class DepartmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    parentId?: SortOrderInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    parent?: DepartmentOrderByWithRelationInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    children?: DepartmentOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => ExpenseOrderByRelationAggregateInput, {nullable:true})
    expenses?: ExpenseOrderByRelationAggregateInput;
}
