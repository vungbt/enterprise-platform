import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../prisma/employee-status.enum';
import { DepartmentUpdateOneRequiredWithoutEmployeesNestedInput } from '../department/department-update-one-required-without-employees-nested.input';
import { EmployeeUpdateOneWithoutReportsNestedInput } from './employee-update-one-without-reports-nested.input';
import { UserUpdateOneWithoutEmployeesNestedInput } from '../user/user-update-one-without-employees-nested.input';

@InputType()
export class EmployeeUpdateWithoutReportsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    position?: string;

    @Field(() => Date, {nullable:true})
    hireDate?: Date | string;

    @Field(() => EmployeeStatus, {nullable:true})
    status?: `${EmployeeStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DepartmentUpdateOneRequiredWithoutEmployeesNestedInput, {nullable:true})
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput;

    @Field(() => EmployeeUpdateOneWithoutReportsNestedInput, {nullable:true})
    manager?: EmployeeUpdateOneWithoutReportsNestedInput;

    @Field(() => UserUpdateOneWithoutEmployeesNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutEmployeesNestedInput;
}
