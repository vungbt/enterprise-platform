import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput } from '../employee/employee-unchecked-update-many-without-department-nested.input';
import { ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput } from '../expense/expense-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput;
}
