import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUncheckedUpdateManyWithoutParentNestedInput } from './department-unchecked-update-many-without-parent-nested.input';
import { ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput } from '../expense/expense-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutEmployeesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => DepartmentUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutDepartmentNestedInput;
}
