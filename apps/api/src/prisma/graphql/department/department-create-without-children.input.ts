import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutChildrenInput } from './department-create-nested-one-without-children.input';
import { EmployeeCreateNestedManyWithoutDepartmentInput } from '../employee/employee-create-nested-many-without-department.input';
import { ExpenseCreateNestedManyWithoutDepartmentInput } from '../expense/expense-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutChildrenInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DepartmentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: DepartmentCreateNestedOneWithoutChildrenInput;

    @Field(() => EmployeeCreateNestedManyWithoutDepartmentInput, {nullable:true})
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput;

    @Field(() => ExpenseCreateNestedManyWithoutDepartmentInput, {nullable:true})
    expenses?: ExpenseCreateNestedManyWithoutDepartmentInput;
}
