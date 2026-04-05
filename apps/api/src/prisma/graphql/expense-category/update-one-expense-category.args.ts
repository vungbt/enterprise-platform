import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCategoryUpdateInput } from './expense-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ExpenseCategoryWhereUniqueInput } from './expense-category-where-unique.input';

@ArgsType()
export class UpdateOneExpenseCategoryArgs {

    @Field(() => ExpenseCategoryUpdateInput, {nullable:false})
    @Type(() => ExpenseCategoryUpdateInput)
    data!: ExpenseCategoryUpdateInput;

    @Field(() => ExpenseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseCategoryWhereUniqueInput, 'id' | 'name'>;
}
