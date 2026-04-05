import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutCreatedByInput } from './expense-update-without-created-by.input';
import { ExpenseCreateWithoutCreatedByInput } from './expense-create-without-created-by.input';

@InputType()
export class ExpenseUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutCreatedByInput)
    update!: ExpenseUpdateWithoutCreatedByInput;

    @Field(() => ExpenseCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutCreatedByInput)
    create!: ExpenseCreateWithoutCreatedByInput;
}
