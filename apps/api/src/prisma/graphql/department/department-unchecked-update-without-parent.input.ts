import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUncheckedUpdateManyWithoutParentNestedInput } from './department-unchecked-update-many-without-parent-nested.input';
import { EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput } from '../employee/employee-unchecked-update-many-without-department-nested.input';
import { ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput } from '../expense/expense-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutParentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => DepartmentUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput;
}
