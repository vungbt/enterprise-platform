import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutDepartmentInput } from './expense-create-without-department.input';

@InputType()
export class ExpenseCreateOrConnectWithoutDepartmentInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutDepartmentInput)
    create!: ExpenseCreateWithoutDepartmentInput;
}
