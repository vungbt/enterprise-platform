import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutReportsInput } from './employee-update-without-reports.input';

@InputType()
export class EmployeeUpdateToOneWithWhereWithoutReportsInput {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;

    @Field(() => EmployeeUpdateWithoutReportsInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutReportsInput)
    data!: EmployeeUpdateWithoutReportsInput;
}
