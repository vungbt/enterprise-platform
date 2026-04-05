import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutConfirmedByUserInput } from './fund-contribution-create-without-confirmed-by-user.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutConfirmedByUserInput } from './fund-contribution-create-or-connect-without-confirmed-by-user.input';
import { FundContributionCreateManyConfirmedByUserInputEnvelope } from './fund-contribution-create-many-confirmed-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';

@InputType()
export class FundContributionCreateNestedManyWithoutConfirmedByUserInput {

    @Field(() => [FundContributionCreateWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionCreateWithoutConfirmedByUserInput)
    create?: Array<FundContributionCreateWithoutConfirmedByUserInput>;

    @Field(() => [FundContributionCreateOrConnectWithoutConfirmedByUserInput], {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutConfirmedByUserInput)
    connectOrCreate?: Array<FundContributionCreateOrConnectWithoutConfirmedByUserInput>;

    @Field(() => FundContributionCreateManyConfirmedByUserInputEnvelope, {nullable:true})
    @Type(() => FundContributionCreateManyConfirmedByUserInputEnvelope)
    createMany?: FundContributionCreateManyConfirmedByUserInputEnvelope;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;
}
