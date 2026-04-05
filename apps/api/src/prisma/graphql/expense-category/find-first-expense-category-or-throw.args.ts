import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseCategoryWhereInput } from './expense-category-where.input';
import { Type } from 'class-transformer';
import { ExpenseCategoryOrderByWithRelationInput } from './expense-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExpenseCategoryWhereUniqueInput } from './expense-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpenseCategoryScalarFieldEnum } from './expense-category-scalar-field.enum';

@ArgsType()
export class FindFirstExpenseCategoryOrThrowArgs {

    @Field(() => ExpenseCategoryWhereInput, {nullable:true})
    @Type(() => ExpenseCategoryWhereInput)
    where?: ExpenseCategoryWhereInput;

    @Field(() => [ExpenseCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExpenseCategoryOrderByWithRelationInput>;

    @Field(() => ExpenseCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExpenseCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExpenseCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ExpenseCategoryScalarFieldEnum}`>;
}
