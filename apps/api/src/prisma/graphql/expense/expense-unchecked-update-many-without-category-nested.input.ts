import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutCategoryInput } from './expense-create-without-category.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutCategoryInput } from './expense-create-or-connect-without-category.input';
import { ExpenseUpsertWithWhereUniqueWithoutCategoryInput } from './expense-upsert-with-where-unique-without-category.input';
import { ExpenseCreateManyCategoryInputEnvelope } from './expense-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutCategoryInput } from './expense-update-with-where-unique-without-category.input';
import { ExpenseUpdateManyWithWhereWithoutCategoryInput } from './expense-update-many-with-where-without-category.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ExpenseCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutCategoryInput)
    create?: Array<ExpenseCreateWithoutCategoryInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ExpenseUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ExpenseCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyCategoryInputEnvelope)
    createMany?: ExpenseCreateManyCategoryInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;

    @Field(() => [ExpenseUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ExpenseUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ExpenseUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ExpenseUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ExpenseUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ExpenseScalarWhereInput], {nullable:true})
    @Type(() => ExpenseScalarWhereInput)
    deleteMany?: Array<ExpenseScalarWhereInput>;
}
