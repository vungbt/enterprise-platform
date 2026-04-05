import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUncheckedUpdateManyWithoutParentNestedInput } from './department-unchecked-update-many-without-parent-nested.input';
import { EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput } from '../employee/employee-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutExpensesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => DepartmentUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;
}
