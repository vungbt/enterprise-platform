import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionUpdateWithoutMemberInput } from './fund-contribution-update-without-member.input';
import { FundContributionCreateWithoutMemberInput } from './fund-contribution-create-without-member.input';

@InputType()
export class FundContributionUpsertWithWhereUniqueWithoutMemberInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionUpdateWithoutMemberInput, {nullable:false})
    @Type(() => FundContributionUpdateWithoutMemberInput)
    update!: FundContributionUpdateWithoutMemberInput;

    @Field(() => FundContributionCreateWithoutMemberInput, {nullable:false})
    @Type(() => FundContributionCreateWithoutMemberInput)
    create!: FundContributionCreateWithoutMemberInput;
}
