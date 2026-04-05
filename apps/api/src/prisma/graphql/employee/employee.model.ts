import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EmployeeStatus } from '../prisma/employee-status.enum';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:false})
    position!: string;

    @Field(() => Date, {nullable:false})
    hireDate!: Date;

    @Field(() => EmployeeStatus, {defaultValue:'active',nullable:false})
    status!: `${EmployeeStatus}`;

    @Field(() => String, {nullable:false})
    departmentId!: string;

    @Field(() => String, {nullable:true})
    managerId!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Department, {nullable:false})
    department?: Department;

    @Field(() => Employee, {nullable:true})
    manager?: Employee | null;

    @Field(() => [Employee], {nullable:true})
    reports?: Array<Employee>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
