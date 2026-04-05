import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutFundInput } from './expense-create-without-fund.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutFundInput } from './expense-create-or-connect-without-fund.input';
import { ExpenseUpsertWithWhereUniqueWithoutFundInput } from './expense-upsert-with-where-unique-without-fund.input';
import { ExpenseCreateManyFundInputEnvelope } from './expense-create-many-fund-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutFundInput } from './expense-update-with-where-unique-without-fund.input';
import { ExpenseUpdateManyWithWhereWithoutFundInput } from './expense-update-many-with-where-without-fund.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUpdateManyWithoutFundNestedInput {

    @Field(() => [ExpenseCreateWithoutFundInput], {nullable:true})
    @Type(() => ExpenseCreateWithoutFundInput)
    create?: Array<ExpenseCreateWithoutFundInput>;

    @Field(() => [ExpenseCreateOrConnectWithoutFundInput], {nullable:true})
    @Type(() => ExpenseCreateOrConnectWithoutFundInput)
    connectOrCreate?: Array<ExpenseCreateOrConnectWithoutFundInput>;

    @Field(() => [ExpenseUpsertWithWhereUniqueWithoutFundInput], {nullable:true})
    @Type(() => ExpenseUpsertWithWhereUniqueWithoutFundInput)
    upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutFundInput>;

    @Field(() => ExpenseCreateManyFundInputEnvelope, {nullable:true})
    @Type(() => ExpenseCreateManyFundInputEnvelope)
    createMany?: ExpenseCreateManyFundInputEnvelope;

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

    @Field(() => [ExpenseUpdateWithWhereUniqueWithoutFundInput], {nullable:true})
    @Type(() => ExpenseUpdateWithWhereUniqueWithoutFundInput)
    update?: Array<ExpenseUpdateWithWhereUniqueWithoutFundInput>;

    @Field(() => [ExpenseUpdateManyWithWhereWithoutFundInput], {nullable:true})
    @Type(() => ExpenseUpdateManyWithWhereWithoutFundInput)
    updateMany?: Array<ExpenseUpdateManyWithWhereWithoutFundInput>;

    @Field(() => [ExpenseScalarWhereInput], {nullable:true})
    @Type(() => ExpenseScalarWhereInput)
    deleteMany?: Array<ExpenseScalarWhereInput>;
}
