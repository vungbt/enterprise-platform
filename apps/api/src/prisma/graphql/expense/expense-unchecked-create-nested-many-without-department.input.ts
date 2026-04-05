import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutDepartmentInput } from './expense-create-without-department.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutDepartmentInput } from './expense-create-or-connect-without-department.input';
import { ExpenseCreateManyDepartmentInputEnvelope } from './expense-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [ExpenseCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutDepartmentInput)
    create?: Array<ExpenseCreateWithoutDepartmentInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutDepartmentInput>;

    @Field(() => ExpenseCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyDepartmentInputEnvelope)
    createMany?: ExpenseCreateManyDepartmentInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;
}
