import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutCategoryInput } from './expense-create-without-category.input';

@InputType()
export class ExpenseCreateOrConnectWithoutCategoryInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutCategoryInput)
    create!: ExpenseCreateWithoutCategoryInput;
}
