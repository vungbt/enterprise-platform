import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateOneWithoutChildrenNestedInput } from './department-update-one-without-children-nested.input';
import { EmployeeUpdateManyWithoutDepartmentNestedInput } from '../employee/employee-update-many-without-department-nested.input';
import { ExpenseUpdateManyWithoutDepartmentNestedInput } from '../expense/expense-update-many-without-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DepartmentUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput;

    @Field(() => EmployeeUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ExpenseUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutDepartmentNestedInput;
}
