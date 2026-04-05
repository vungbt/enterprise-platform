import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from '../prisma/employee-status.enum';
import { EmployeeUncheckedUpdateManyWithoutManagerNestedInput } from './employee-unchecked-update-many-without-manager-nested.input';

@InputType()
export class EmployeeUncheckedUpdateWithoutManagerInput {

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

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeUncheckedUpdateManyWithoutManagerNestedInput, {nullable:true})
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput;
}
