import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionUpdateWithoutCreatedByInput } from './fund-transaction-update-without-created-by.input';
import { FundTransactionCreateWithoutCreatedByInput } from './fund-transaction-create-without-created-by.input';

@InputType()
export class FundTransactionUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => FundTransactionUpdateWithoutCreatedByInput)
    update!: FundTransactionUpdateWithoutCreatedByInput;

    @Field(() => FundTransactionCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => FundTransactionCreateWithoutCreatedByInput)
    create!: FundTransactionCreateWithoutCreatedByInput;
}
