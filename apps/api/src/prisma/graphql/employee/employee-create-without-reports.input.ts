import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../prisma/employee-status.enum';
import { DepartmentCreateNestedOneWithoutEmployeesInput } from '../department/department-create-nested-one-without-employees.input';
import { EmployeeCreateNestedOneWithoutReportsInput } from './employee-create-nested-one-without-reports.input';
import { UserCreateNestedOneWithoutEmployeesInput } from '../user/user-create-nested-one-without-employees.input';

@InputType()
export class EmployeeCreateWithoutReportsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:false})
    position!: string;

    @Field(() => Date, {nullable:false})
    hireDate!: Date | string;

    @Field(() => EmployeeStatus, {nullable:true})
    status?: `${EmployeeStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DepartmentCreateNestedOneWithoutEmployeesInput, {nullable:false})
    department!: DepartmentCreateNestedOneWithoutEmployeesInput;

    @Field(() => EmployeeCreateNestedOneWithoutReportsInput, {nullable:true})
    manager?: EmployeeCreateNestedOneWithoutReportsInput;

    @Field(() => UserCreateNestedOneWithoutEmployeesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutEmployeesInput;
}
