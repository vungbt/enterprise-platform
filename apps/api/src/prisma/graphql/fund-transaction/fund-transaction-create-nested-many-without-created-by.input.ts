import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutCreatedByInput } from './fund-transaction-create-without-created-by.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutCreatedByInput } from './fund-transaction-create-or-connect-without-created-by.input';
import { FundTransactionCreateManyCreatedByInputEnvelope } from './fund-transaction-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';

@InputType()
export class FundTransactionCreateNestedManyWithoutCreatedByInput {

    @Field(() => [FundTransactionCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutCreatedByInput)
    create?: Array<FundTransactionCreateWithoutCreatedByInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutCreatedByInput>;

    @Field(() => FundTransactionCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyCreatedByInputEnvelope)
    createMany?: FundTransactionCreateManyCreatedByInputEnvelope;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;
}
