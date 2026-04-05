import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateOneWithoutChildrenNestedInput } from './department-update-one-without-children-nested.input';
import { DepartmentUpdateManyWithoutParentNestedInput } from './department-update-many-without-parent-nested.input';
import { ExpenseUpdateManyWithoutDepartmentNestedInput } from '../expense/expense-update-many-without-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutEmployeesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DepartmentUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput;

    @Field(() => DepartmentUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: DepartmentUpdateManyWithoutParentNestedInput;

    @Field(() => ExpenseUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutDepartmentNestedInput;
}
