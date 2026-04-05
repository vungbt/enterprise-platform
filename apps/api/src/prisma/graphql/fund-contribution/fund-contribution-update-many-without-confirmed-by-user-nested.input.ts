import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutConfirmedByUserInput } from './fund-contribution-create-without-confirmed-by-user.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutConfirmedByUserInput } from './fund-contribution-create-or-connect-without-confirmed-by-user.input';
import { FundContributionUpsertWithWhereUniqueWithoutConfirmedByUserInput } from './fund-contribution-upsert-with-where-unique-without-confirmed-by-user.input';
import { FundContributionCreateManyConfirmedByUserInputEnvelope } from './fund-contribution-create-many-confirmed-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput } from './fund-contribution-update-with-where-unique-without-confirmed-by-user.input';
import { FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput } from './fund-contribution-update-many-with-where-without-confirmed-by-user.input';
import { FundContributionScalarWhereInput } from './fund-contribution-scalar-where.input';

@InputType()
export class FundContributionUpdateManyWithoutConfirmedByUserNestedInput {

    @Field(() => [FundContributionCreateWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionCreateWithoutConfirmedByUserInput)
    create?: Array<FundContributionCreateWithoutConfirmedByUserInput>;

    @Field(() => [FundContributionCreateOrConnectWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutConfirmedByUserInput)
    connectOrCreate?: Array<FundContributionCreateOrConnectWithoutConfirmedByUserInput>;

    @Field(() => [FundContributionUpsertWithWhereUniqueWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionUpsertWithWhereUniqueWithoutConfirmedByUserInput)
    upsert?: Array<FundContributionUpsertWithWhereUniqueWithoutConfirmedByUserInput>;

    @Field(() => FundContributionCreateManyConfirmedByUserInputEnvelope, {nullable:true})
    @Type(() => FundContributionCreateManyConfirmedByUserInputEnvelope)
    createMany?: FundContributionCreateManyConfirmedByUserInputEnvelope;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;

    @Field(() => [FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput)
    update?: Array<FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput>;

    @Field(() => [FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput)
    updateMany?: Array<FundContributionUpdateManyWithWhereWithoutConfirmedByUserInput>;

    @Field(() => [FundContributionScalarWhereInput], {nullable:true})
    @Type(() => FundContributionScalarWhereInput)
    deleteMany?: Array<FundContributionScalarWhereInput>;
}
