import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionCreateWithoutMemberInput } from './fund-contribution-create-without-member.input';
import { Type } from 'class-transformer';
import { FundContributionCreateOrConnectWithoutMemberInput } from './fund-contribution-create-or-connect-without-member.input';
import { FundContributionCreateManyMemberInputEnvelope } from './fund-contribution-create-many-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';

@InputType()
export class FundContributionCreateNestedManyWithoutMemberInput {

    @Field(() => [FundContributionCreateWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionCreateWithoutMemberInput)
    create?: Array<FundContributionCreateWithoutMemberInput>;

    @Field(() => [FundContributionCreateOrConnectWithoutMemberInput], {nullable:true})
    @Type(() => FundContributionCreateOrConnectWithoutMemberInput)
    connectOrCreate?: Array<FundContributionCreateOrConnectWithoutMemberInput>;

    @Field(() => FundContributionCreateManyMemberInputEnvelope, {nullable:true})
    @Type(() => FundContributionCreateManyMemberInputEnvelope)
    createMany?: FundContributionCreateManyMemberInputEnvelope;

    @Field(() => [FundContributionWhereUniqueInput], {nullable:true})
    @Type(() => FundContributionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>>;
}
