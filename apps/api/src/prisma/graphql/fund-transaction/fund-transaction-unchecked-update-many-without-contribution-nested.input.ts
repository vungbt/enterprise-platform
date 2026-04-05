import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionCreateWithoutContributionInput } from './fund-transaction-create-without-contribution.input';
import { Type } from 'class-transformer';
import { FundTransactionCreateOrConnectWithoutContributionInput } from './fund-transaction-create-or-connect-without-contribution.input';
import { FundTransactionUpsertWithWhereUniqueWithoutContributionInput } from './fund-transaction-upsert-with-where-unique-without-contribution.input';
import { FundTransactionCreateManyContributionInputEnvelope } from './fund-transaction-create-many-contribution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundTransactionWhereUniqueInput } from './fund-transaction-where-unique.input';
import { FundTransactionUpdateWithWhereUniqueWithoutContributionInput } from './fund-transaction-update-with-where-unique-without-contribution.input';
import { FundTransactionUpdateManyWithWhereWithoutContributionInput } from './fund-transaction-update-many-with-where-without-contribution.input';
import { FundTransactionScalarWhereInput } from './fund-transaction-scalar-where.input';

@InputType()
export class FundTransactionUncheckedUpdateManyWithoutContributionNestedInput {

    @Field(() => [FundTransactionCreateWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionCreateWithoutContributionInput)
    create?: Array<FundTransactionCreateWithoutContributionInput>;

    @Field(() => [FundTransactionCreateOrConnectWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionCreateOrConnectWithoutContributionInput)
    connectOrCreate?: Array<FundTransactionCreateOrConnectWithoutContributionInput>;

    @Field(() => [FundTransactionUpsertWithWhereUniqueWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionUpsertWithWhereUniqueWithoutContributionInput)
    upsert?: Array<FundTransactionUpsertWithWhereUniqueWithoutContributionInput>;

    @Field(() => FundTransactionCreateManyContributionInputEnvelope, {nullable:true})
    @Type(() => FundTransactionCreateManyContributionInputEnvelope)
    createMany?: FundTransactionCreateManyContributionInputEnvelope;

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

    @Field(() => [FundTransactionUpdateWithWhereUniqueWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionUpdateWithWhereUniqueWithoutContributionInput)
    update?: Array<FundTransactionUpdateWithWhereUniqueWithoutContributionInput>;

    @Field(() => [FundTransactionUpdateManyWithWhereWithoutContributionInput], {nullable:true})
    @Type(() => FundTransactionUpdateManyWithWhereWithoutContributionInput)
    updateMany?: Array<FundTransactionUpdateManyWithWhereWithoutContributionInput>;

    @Field(() => [FundTransactionScalarWhereInput], {nullable:true})
    @Type(() => FundTransactionScalarWhereInput)
    deleteMany?: Array<FundTransactionScalarWhereInput>;
}
