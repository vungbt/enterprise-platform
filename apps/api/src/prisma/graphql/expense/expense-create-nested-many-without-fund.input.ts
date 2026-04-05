import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutFundInput } from './expense-create-without-fund.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutFundInput } from './expense-create-or-connect-without-fund.input';
import { ExpenseCreateManyFundInputEnvelope } from './expense-create-many-fund-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseCreateNestedManyWithoutFundInput {

    @Field(() => [ExpenseCreateWithoutFundInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutFundInput)
    create?: Array<ExpenseCreateWithoutFundInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutFundInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutFundInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutFundInput>;

    @Field(() => ExpenseCreateManyFundInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyFundInputEnvelope)
    createMany?: ExpenseCreateManyFundInputEnvelope;

    @Field(() => [ExpenseWhereUniqueInput], {nullable:true})
    @Type(() => ExpenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExpenseWhereUniqueInput, 'id'>>;
}
