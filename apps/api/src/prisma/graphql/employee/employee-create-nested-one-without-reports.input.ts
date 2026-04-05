import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutReportsInput } from './employee-create-without-reports.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutReportsInput } from './employee-create-or-connect-without-reports.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutReportsInput {

    @Field(() => EmployeeCreateWithoutReportsInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutReportsInput)
    create?: EmployeeCreateWithoutReportsInput;

    @Field(() => EmployeeCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutReportsInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutReportsInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>;
}
