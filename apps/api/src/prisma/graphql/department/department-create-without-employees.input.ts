import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutChildrenInput } from './department-create-nested-one-without-children.input';
import { DepartmentCreateNestedManyWithoutParentInput } from './department-create-nested-many-without-parent.input';
import { ExpenseCreateNestedManyWithoutDepartmentInput } from '../expense/expense-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutEmployeesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DepartmentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: DepartmentCreateNestedOneWithoutChildrenInput;

    @Field(() => DepartmentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: DepartmentCreateNestedManyWithoutParentInput;

    @Field(() => ExpenseCreateNestedManyWithoutDepartmentInput, {nullable:true})
    expenses?: ExpenseCreateNestedManyWithoutDepartmentInput;
}
