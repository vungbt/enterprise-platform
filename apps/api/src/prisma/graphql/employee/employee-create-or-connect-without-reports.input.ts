import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutReportsInput } from './employee-create-without-reports.input';

@InputType()
export class EmployeeCreateOrConnectWithoutReportsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>;

    @Field(() => EmployeeCreateWithoutReportsInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutReportsInput)
    create!: EmployeeCreateWithoutReportsInput;
}
