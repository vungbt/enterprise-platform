import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutCategoryInput } from './expense-create-without-category.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutCategoryInput } from './expense-create-or-connect-without-category.input';
import { ExpenseCreateManyCategoryInputEnvelope } from './expense-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [ExpenseCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutCategoryInput)
    create?: Array<ExpenseCreateWithoutCategoryInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutCategoryInput>;

    @Field(() => ExpenseCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyCategoryInputEnvelope)
    createMany?: ExpenseCreateManyCategoryInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;
}
