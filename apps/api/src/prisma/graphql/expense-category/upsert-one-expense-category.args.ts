import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseCategoryWhereUniqueInput } from './expense-category-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryCreateInput } from './expense-category-create.input';
import { ExpenseCategoryUpdateInput } from './expense-category-update.input';

@ArgsType()
export class UpsertOneExpenseCategoryArgs {

    @Field(() => ExpenseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ExpenseCategoryCreateInput, {nullable:false})
    @Type(() => ExpenseCategoryCreateInput)
    create!: ExpenseCategoryCreateInput;

    @Field(() => ExpenseCategoryUpdateInput, {nullable:false})
    @Type(() => ExpenseCategoryUpdateInput)
    update!: ExpenseCategoryUpdateInput;
}
