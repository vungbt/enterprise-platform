import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUncheckedCreateNestedManyWithoutParentInput } from './department-unchecked-create-nested-many-without-parent.input';
import { EmployeeUncheckedCreateNestedManyWithoutDepartmentInput } from '../employee/employee-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutExpensesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
}
