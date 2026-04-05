import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutExpenseInput } from './fund-transaction-create-without-expense.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutExpenseInput } from './fund-transaction-create-or-connect-without-expense.input';
import { FundTransactionCreateManyExpenseInputEnvelope } from './fund-transaction-create-many-expense-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';

@InputType()
export class FundTransactionCreateNestedManyWithoutExpenseInput {

    @Field(() => [FundTransactionCreateWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutExpenseInput)
    create?: Array<FundTransactionCreateWithoutExpenseInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutExpenseInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutExpenseInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutExpenseInput>;

    @Field(() => FundTransactionCreateManyExpenseInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyExpenseInputEnvelope)
    createMany?: FundTransactionCreateManyExpenseInputEnvelope;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;
}
