import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutDepartmentInput } from './expense-update-without-department.input';

@InputType()
export class ExpenseUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutDepartmentInput)
    data!: ExpenseUpdateWithoutDepartmentInput;
}
