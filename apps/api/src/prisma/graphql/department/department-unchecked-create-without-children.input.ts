import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUncheckedCreateNestedManyWithoutDepartmentInput } from '../employee/employee-unchecked-create-nested-many-without-department.input';
import { ExpenseUncheckedCreateNestedManyWithoutDepartmentInput } from '../expense/expense-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => ExpenseUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    expenses?: ExpenseUncheckedCreateNestedManyWithoutDepartmentInput;
}
