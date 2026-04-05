import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionUpdateWithoutFundInput } from './fund-transaction-update-without-fund.input';
import { FundTransactionCreateWithoutFundInput } from './fund-transaction-create-without-fund.input';

@InputType()
export class FundTransactionUpsertWithWhereUniqueWithoutFundInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionUpdateWithoutFundInput, {nullable:false})
    @Type(() => FundTransactionUpdateWithoutFundInput)
    update!: FundTransactionUpdateWithoutFundInput;

    @Field(() => FundTransactionCreateWithoutFundInput, {nullable:false})
    @Type(() => FundTransactionCreateWithoutFundInput)
    create!: FundTransactionCreateWithoutFundInput;
}
