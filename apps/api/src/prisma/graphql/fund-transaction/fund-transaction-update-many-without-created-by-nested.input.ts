import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutCreatedByInput } from './fund-transaction-create-without-created-by.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutCreatedByInput } from './fund-transaction-create-or-connect-without-created-by.input';
import { FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput } from './fund-transaction-upsert-with-where-unique-without-created-by.input';
import { FundTransactionCreateManyCreatedByInputEnvelope } from './fund-transaction-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { FundTransactionUpdateWithWhereUniqueWithoutCreatedByInput } from './fund-transaction-update-with-where-unique-without-created-by.input';
import { FundTransactionUpdateManyWithWhereWithoutCreatedByInput } from './fund-transaction-update-many-with-where-without-created-by.input';
import { FundTransactionScalarWhereInput } from './fund-transaction-scalar-where.input';

@InputType()
export class FundTransactionUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [FundTransactionCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutCreatedByInput)
    create?: Array<FundTransactionCreateWithoutCreatedByInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => FundTransactionCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyCreatedByInputEnvelope)
    createMany?: FundTransactionCreateManyCreatedByInputEnvelope;

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

    @Field(() => [FundTransactionUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<FundTransactionUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [FundTransactionUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<FundTransactionUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [FundTransactionScalarWhereInput], {nullable:true})
    @Type(() => FundTransactionScalarWhereInput)
    deleteMany?: Array<FundTransactionScalarWhereInput>;
}
