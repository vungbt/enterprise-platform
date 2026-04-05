import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../prisma/employee-status.enum';
import { DepartmentCreateNestedOneWithoutEmployeesInput } from '../department/department-create-nested-one-without-employees.input';
import { EmployeeCreateNestedOneWithoutReportsInput } from './employee-create-nested-one-without-reports.input';
import { EmployeeCreateNestedManyWithoutManagerInput } from './employee-create-nested-many-without-manager.input';

@InputType()
export class EmployeeCreateWithoutUserInput {

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

    @Field(() => EmployeeCreateNestedManyWithoutManagerInput, {nullable:true})
    reports?: EmployeeCreateNestedManyWithoutManagerInput;
}
