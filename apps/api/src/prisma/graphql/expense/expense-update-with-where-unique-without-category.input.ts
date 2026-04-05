import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutCategoryInput } from './expense-update-without-category.input';

@InputType()
export class ExpenseUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => ExpenseUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ExpenseUpdateWithoutCategoryInput)
    data!: ExpenseUpdateWithoutCategoryInput;
}
