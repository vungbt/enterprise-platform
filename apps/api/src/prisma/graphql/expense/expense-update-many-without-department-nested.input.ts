import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutDepartmentInput } from './expense-create-without-department.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutDepartmentInput } from './expense-create-or-connect-without-department.input';
import { ExpenseUpsertWithWhereUniqueWithoutDepartmentInput } from './expense-upsert-with-where-unique-without-department.input';
import { ExpenseCreateManyDepartmentInputEnvelope } from './expense-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutDepartmentInput } from './expense-update-with-where-unique-without-department.input';
import { ExpenseUpdateManyWithWhereWithoutDepartmentInput } from './expense-update-many-with-where-without-department.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [ExpenseCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutDepartmentInput)
    create?: Array<ExpenseCreateWithoutDepartmentInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [ExpenseUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => ExpenseCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyDepartmentInputEnvelope)
    createMany?: ExpenseCreateManyDepartmentInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<ExpenseUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [ExpenseUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => ExpenseUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<ExpenseUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [ExpenseScalarWhereInput], {nullable:true})
    @Type(() => ExpenseScalarWhereInput)
    deleteMany?: Array<ExpenseScalarWhereInput>;
}
