import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { FundTransactionUpdateWithoutContributionInput } from './fund-transaction-update-without-contribution.input';

@InputType()
export class FundTransactionUpdateWithWhereUniqueWithoutContributionInput {

    @Field(() => FundTransactionWhereUniqueInput, {nullable:false})
    @Type(() => FundTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>;

    @Field(() => FundTransactionUpdateWithoutContributionInput, {nullable:false})
    @Type(() => FundTransactionUpdateWithoutContributionInput)
    data!: FundTransactionUpdateWithoutContributionInput;
}
