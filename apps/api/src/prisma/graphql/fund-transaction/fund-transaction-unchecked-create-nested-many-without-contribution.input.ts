import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutContributionInput } from './fund-transaction-create-without-contribution.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutContributionInput } from './fund-transaction-create-or-connect-without-contribution.input';
import { FundTransactionCreateManyContributionInputEnvelope } from './fund-transaction-create-many-contribution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';

@InputType()
export class FundTransactionUncheckedCreateNestedManyWithoutContributionInput {

    @Field(() => [FundTransactionCreateWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutContributionInput)
    create?: Array<FundTransactionCreateWithoutContributionInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutContributionInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutContributionInput>;

    @Field(() => FundTransactionCreateManyContributionInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyContributionInputEnvelope)
    createMany?: FundTransactionCreateManyContributionInputEnvelope;

    @Field(() => [FundTransactionWhereUniqueInput], {nullable:true})
    @Type(() => FundTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundTransactionWhereUniqueInput, 'id'>>;
}
