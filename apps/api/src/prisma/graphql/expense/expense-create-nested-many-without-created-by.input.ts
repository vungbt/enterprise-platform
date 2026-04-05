import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutCreatedByInput } from './expense-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutCreatedByInput } from './expense-create-or-connect-without-created-by.input';
import { ExpenseCreateManyCreatedByInputEnvelope } from './expense-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseCreateNestedManyWithoutCreatedByInput {

    @Field(() => [ExpenseCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutCreatedByInput)
    create?: Array<ExpenseCreateWithoutCreatedByInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutCreatedByInput>;

    @Field(() => ExpenseCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyCreatedByInputEnvelope)
    createMany?: ExpenseCreateManyCreatedByInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;
}
