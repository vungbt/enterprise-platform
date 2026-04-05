import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateWithoutFundInput } from './fund-transaction-create-without-fund.input';

@InputType()
export class FundTransactionCreateOrConnectWithoutFundInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionCreateWithoutFundInput, {nullable:false})
    @Type(() => FundTransactionCreateWithoutFundInput)
    create!: FundTransactionCreateWithoutFundInput;
}
