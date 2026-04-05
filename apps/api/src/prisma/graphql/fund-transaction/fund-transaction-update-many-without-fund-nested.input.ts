import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutFundInput } from './fund-transaction-create-without-fund.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutFundInput } from './fund-transaction-create-or-connect-without-fund.input';
import { FundTransactionUpsertWithWhereUniqueWithoutFundInput } from './fund-transaction-upsert-with-where-unique-without-fund.input';
import { FundTransactionCreateManyFundInputEnvelope } from './fund-transaction-create-many-fund-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { FundTransactionUpdateWithWhereUniqueWithoutFundInput } from './fund-transaction-update-with-where-unique-without-fund.input';
import { FundTransactionUpdateManyWithWhereWithoutFundInput } from './fund-transaction-update-many-with-where-without-fund.input';
import { FundTransactionScalarWhereInput } from './fund-transaction-scalar-where.input';

@InputType()
export class FundTransactionUpdateManyWithoutFundNestedInput {

    @Field(() => [FundTransactionCreateWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutFundInput)
    create?: Array<FundTransactionCreateWithoutFundInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutFundInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutFundInput>;

    @Field(() => [FundTransactionUpsertWithWhereUniqueWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionUpsertWithWhereUniqueWithoutFundInput)
    upsert?: Array<FundTransactionUpsertWithWhereUniqueWithoutFundInput>;

    @Field(() => FundTransactionCreateManyFundInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyFundInputEnvelope)
    createMany?: FundTransactionCreateManyFundInputEnvelope;

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

    @Field(() => [FundTransactionUpdateWithWhereUniqueWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionUpdateWithWhereUniqueWithoutFundInput)
    update?: Array<FundTransactionUpdateWithWhereUniqueWithoutFundInput>;

    @Field(() => [FundTransactionUpdateManyWithWhereWithoutFundInput], {nullable:true})
    @Type(() => FundTransactionUpdateManyWithWhereWithoutFundInput)
    updateMany?: Array<FundTransactionUpdateManyWithWhereWithoutFundInput>;

    @Field(() => [FundTransactionScalarWhereInput], {nullable:true})
    @Type(() => FundTransactionScalarWhereInput)
    deleteMany?: Array<FundTransactionScalarWhereInput>;
}
