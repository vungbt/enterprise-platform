import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionWhereInput } from './fund-contribution-where.input';

@InputType()
export class FundContributionNullableScalarRelationFilter {

    @Field(() => FundContributionWhereInput, {nullable:true})
    is?: FundContributionWhereInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    isNot?: FundContributionWhereInput;
}
