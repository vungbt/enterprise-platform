import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutExpensesInput } from './department-create-without-expenses.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutExpensesInput } from './department-create-or-connect-without-expenses.input';
import { DepartmentUpsertWithoutExpensesInput } from './department-upsert-without-expenses.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutExpensesInput } from './department-update-to-one-with-where-without-expenses.input';

@InputType()
export class DepartmentUpdateOneWithoutExpensesNestedInput {

    @Field(() => DepartmentCreateWithoutExpensesInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutExpensesInput)
    create?: DepartmentCreateWithoutExpensesInput;

    @Field(() => DepartmentCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutExpensesInput;

    @Field(() => DepartmentUpsertWithoutExpensesInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutExpensesInput)
    upsert?: DepartmentUpsertWithoutExpensesInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutExpensesInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutExpensesInput)
    update?: DepartmentUpdateToOneWithWhereWithoutExpensesInput;
}
