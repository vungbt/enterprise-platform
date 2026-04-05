import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutExpenseInput } from './fund-transaction-create-without-expense.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutExpenseInput } from './fund-transaction-create-or-connect-without-expense.input';
import { FundTransactionUpsertWithWhereUniqueWithoutExpenseInput } from './fund-transaction-upsert-with-where-unique-without-expense.input';
import { FundTransactionCreateManyExpenseInputEnvelope } from './fund-transaction-create-many-expense-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { FundTransactionUpdateWithWhereUniqueWithoutExpenseInput } from './fund-transaction-update-with-where-unique-without-expense.input';
import { FundTransactionUpdateManyWithWhereWithoutExpenseInput } from './fund-transaction-update-many-with-where-without-expense.input';
import { FundTransactionScalarWhereInput } from './fund-transaction-scalar-where.input';

@InputType()
export class FundTransactionUpdateManyWithoutExpenseNestedInput {

    @Field(() => [FundTransactionCreateWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutExpenseInput)
    create?: Array<FundTransactionCreateWithoutExpenseInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutExpenseInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutExpenseInput>;

    @Field(() => [FundTransactionUpsertWithWhereUniqueWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionUpsertWithWhereUniqueWithoutExpenseInput)
    upsert?: Array<FundTransactionUpsertWithWhereUniqueWithoutExpenseInput>;

    @Field(() => FundTransactionCreateManyExpenseInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyExpenseInputEnvelope)
    createMany?: FundTransactionCreateManyExpenseInputEnvelope;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [FundTransactionUpdateWithWhereUniqueWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionUpdateWithWhereUniqueWithoutExpenseInput)
    update?: Array<FundTransactionUpdateWithWhereUniqueWithoutExpenseInput>;

    @Field(() => [FundTransactionUpdateManyWithWhereWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionUpdateManyWithWhereWithoutExpenseInput)
    updateMany?: Array<FundTransactionUpdateManyWithWhereWithoutExpenseInput>;

    @Field(() => [FundTransactionScalarWhereInput], {nullable:true})
    @Type(() => FundTransactionScalarWhereInput)
    deleteMany?: Array<FundTransactionScalarWhereInput>;
}
