import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutReportsInput } from './employee-create-without-reports.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutReportsInput } from './employee-create-or-connect-without-reports.input';
import { EmployeeUpsertWithoutReportsInput } from './employee-upsert-without-reports.input';
import { EmployeeWhereInput } from './employee-where.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateToOneWithWhereWithoutReportsInput } from './employee-update-to-one-with-where-without-reports.input';

@InputType()
export class EmployeeUpdateOneWithoutReportsNestedInput {

    @Field(() => EmployeeCreateWithoutReportsInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutReportsInput)
    create?: EmployeeCreateWithoutReportsInput;

    @Field(() => EmployeeCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutReportsInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutReportsInput;

    @Field(() => EmployeeUpsertWithoutReportsInput, {nullable:true})
    @Type(() => EmployeeUpsertWithoutReportsInput)
    upsert?: EmployeeUpsertWithoutReportsInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    disconnect?: EmployeeWhereInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    delete?: EmployeeWhereInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'code' | 'email'>;

    @Field(() => EmployeeUpdateToOneWithWhereWithoutReportsInput, {nullable:true})
    @Type(() => EmployeeUpdateToOneWithWhereWithoutReportsInput)
    update?: EmployeeUpdateToOneWithWhereWithoutReportsInput;
}
