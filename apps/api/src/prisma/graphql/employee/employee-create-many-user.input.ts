import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../prisma/employee-status.enum';

@InputType()
export class EmployeeCreateManyUserInput {

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

    @Field(() => String, {nullable:false})
    departmentId!: string;

    @Field(() => String, {nullable:true})
    managerId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
