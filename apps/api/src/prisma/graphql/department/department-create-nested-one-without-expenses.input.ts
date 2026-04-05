import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutExpensesInput } from './department-create-without-expenses.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutExpensesInput } from './department-create-or-connect-without-expenses.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutExpensesInput {

    @Field(() => DepartmentCreateWithoutExpensesInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutExpensesInput)
    create?: DepartmentCreateWithoutExpensesInput;

    @Field(() => DepartmentCreateOrConnectWithoutExpensesInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutExpensesInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutExpensesInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;
}
