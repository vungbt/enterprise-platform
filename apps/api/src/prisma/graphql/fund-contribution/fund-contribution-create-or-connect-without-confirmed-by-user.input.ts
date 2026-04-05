import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Type } from 'class-transformer';
import { FundContributionCreateWithoutConfirmedByUserInput } from './fund-contribution-create-without-confirmed-by-user.input';

@InputType()
export class FundContributionCreateOrConnectWithoutConfirmedByUserInput {

    @Field(() => FundContributionWhereUniqueInput, {nullable:false})
    @Type(() => FundContributionWhereUniqueInput)
    where!: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => FundContributionCreateWithoutConfirmedByUserInput, {nullable:false})
    @Type(() => FundContributionCreateWithoutConfirmedByUserInput)
    create!: FundContributionCreateWithoutConfirmedByUserInput;
}
