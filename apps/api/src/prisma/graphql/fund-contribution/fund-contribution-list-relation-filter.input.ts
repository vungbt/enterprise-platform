import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionWhereInput } from './fund-contribution-where.input';

@InputType()
export class FundContributionListRelationFilter {

    @Field(() => FundContributionWhereInput, {nullable:true})
    every?: FundContributionWhereInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    some?: FundContributionWhereInput;

    @Field(() => FundContributionWhereInput, {nullable:true})
    none?: FundContributionWhereInput;
}
