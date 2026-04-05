import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionUpdateWithoutConfirmedByUserInput } from './fund-contribution-update-without-confirmed-by-user.input';

@InputType()
export class FundContributionUpdateWithWhereUniqueWithoutConfirmedByUserInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionUpdateWithoutConfirmedByUserInput, {nullable:false})
    @Type(() => FundContributionUpdateWithoutConfirmedByUserInput)
    data!: FundContributionUpdateWithoutConfirmedByUserInput;
}
