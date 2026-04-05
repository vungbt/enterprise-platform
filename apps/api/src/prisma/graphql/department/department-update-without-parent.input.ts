import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateManyWithoutParentNestedInput } from './department-update-many-without-parent-nested.input';
import { EmployeeUpdateManyWithoutDepartmentNestedInput } from '../employee/employee-update-many-without-department-nested.input';
import { ExpenseUpdateManyWithoutDepartmentNestedInput } from '../expense/expense-update-many-without-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutParentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DepartmentUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: DepartmentUpdateManyWithoutParentNestedInput;

    @Field(() => EmployeeUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ExpenseUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    expenses?: ExpenseUpdateManyWithoutDepartmentNestedInput;
}
