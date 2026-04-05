import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';
import { Type } from 'class-transformer';
import { ExpenseOrderByWithRelationInput } from './expense-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpenseScalarFieldEnum } from './expense-scalar-field.enum';

@ArgsType()
export class FindFirstExpenseOrThrowArgs {

    @Field(() => ExpenseWhereInput, {nullable:true})
    @Type(() => ExpenseWhereInput)
    where?: ExpenseWhereInput;

    @Field(() => [ExpenseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExpenseOrderByWithRelationInput>;

    @Field(() => ExpenseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExpenseScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ExpenseScalarFieldEnum}`>;
}
