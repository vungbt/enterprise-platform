import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutExpensesInput } from './department-create-without-expenses.input';

@InputType()
export class DepartmentCreateOrConnectWithoutExpensesInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentCreateWithoutExpensesInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutExpensesInput)
    create!: DepartmentCreateWithoutExpensesInput;
}
