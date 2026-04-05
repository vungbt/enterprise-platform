import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionUpdateWithoutMemberInput } from './fund-contribution-update-without-member.input';

@InputType()
export class FundContributionUpdateWithWhereUniqueWithoutMemberInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionUpdateWithoutMemberInput, {nullable:false})
    @Type(() => FundContributionUpdateWithoutMemberInput)
    data!: FundContributionUpdateWithoutMemberInput;
}
