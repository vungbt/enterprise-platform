import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutFundInput } from './fund-transaction-create-without-fund.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutFundInput } from './fund-transaction-create-or-connect-without-fund.input';
import { FundTransactionCreateManyFundInputEnvelope } from './fund-transaction-create-many-fund-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';

@InputType()
export class FundTransactionCreateNestedManyWithoutFundInput {

    @Field(() => [FundTransactionCreateWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutFundInput)
    create?: Array<FundTransactionCreateWithoutFundInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutFundInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutFundInput>;

    @Field(() => FundTransactionCreateManyFundInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyFundInputEnvelope)
    createMany?: FundTransactionCreateManyFundInputEnvelope;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;
}
