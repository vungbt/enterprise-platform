import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutCreatedByInput } from './expense-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutCreatedByInput } from './expense-create-or-connect-without-created-by.input';
import { ExpenseUpsertWithWhereUniqueWithoutCreatedByInput } from './expense-upsert-with-where-unique-without-created-by.input';
import { ExpenseCreateManyCreatedByInputEnvelope } from './expense-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutCreatedByInput } from './expense-update-with-where-unique-without-created-by.input';
import { ExpenseUpdateManyWithWhereWithoutCreatedByInput } from './expense-update-many-with-where-without-created-by.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [ExpenseCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutCreatedByInput)
    create?: Array<ExpenseCreateWithoutCreatedByInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [ExpenseUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => ExpenseCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyCreatedByInputEnvelope)
    createMany?: ExpenseCreateManyCreatedByInputEnvelope;

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

    @Field(() => [ExpenseUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<ExpenseUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [ExpenseUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<ExpenseUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [ExpenseScalarWhereInput], {nullable:true})
    @Type(() => ExpenseScalarWhereInput)
    deleteMany?: Array<ExpenseScalarWhereInput>;
}
