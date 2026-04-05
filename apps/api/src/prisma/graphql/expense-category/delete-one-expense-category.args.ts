import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExpenseCategoryWhereUniqueInput } from './expense-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneExpenseCategoryArgs {

    @Field(() => ExpenseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ExpenseCategoryWhereUniqueInput, 'id' | 'name'>;
}
