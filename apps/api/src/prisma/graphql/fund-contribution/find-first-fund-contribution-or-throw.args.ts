import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundContributionWhereInput } from './fund-contribution-where.input';
import { Type } from 'class-transformer';
import { FundContributionOrderByWithRelationInput } from './fund-contribution-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FundContributionWhereUniqueInput } from './fund-contribution-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundContributionScalarFieldEnum } from './fund-contribution-scalar-field.enum';

@ArgsType()
export class FindFirstFundContributionOrThrowArgs {

    @Field(() => FundContributionWhereInput, {nullable:true})
    @Type(() => FundContributionWhereInput)
    where?: FundContributionWhereInput;

    @Field(() => [FundContributionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FundContributionOrderByWithRelationInput>;

    @Field(() => FundContributionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FundContributionWhereUniqueInput, 'id' | 'fundId_memberId_month_year'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FundContributionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FundContributionScalarFieldEnum}`>;
}
