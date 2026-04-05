import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateWithoutContributionInput } from './fund-transaction-create-without-contribution.input';

@InputType()
export class FundTransactionCreateOrConnectWithoutContributionInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionCreateWithoutContributionInput, {nullable:false})
    @Type(() => FundTransactionCreateWithoutContributionInput)
    create!: FundTransactionCreateWithoutContributionInput;
}
