import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutReportsInput } from './employee-update-without-reports.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutReportsInput } from './employee-create-without-reports.input';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeUpsertWithoutReportsInput {

    @Field(() => EmployeeUpdateWithoutReportsInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutReportsInput)
    update!: EmployeeUpdateWithoutReportsInput;

    @Field(() => EmployeeCreateWithoutReportsInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutReportsInput)
    create!: EmployeeCreateWithoutReportsInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
