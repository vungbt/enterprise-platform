import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionStatus } from './fund-contribution-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFundContributionStatusFilter } from './nested-enum-fund-contribution-status-filter.input';

@InputType()
export class NestedEnumFundContributionStatusWithAggregatesFilter {

    @Field(() => FundContributionStatus, {nullable:true})
    equals?: `${FundContributionStatus}`;

    @Field(() => [FundContributionStatus], {nullable:true})
    in?: Array<`${FundContributionStatus}`>;

    @Field(() => [FundContributionStatus], {nullable:true})
    notIn?: Array<`${FundContributionStatus}`>;

    @Field(() => NestedEnumFundContributionStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFundContributionStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFundContributionStatusFilter, {nullable:true})
    _min?: NestedEnumFundContributionStatusFilter;

    @Field(() => NestedEnumFundContributionStatusFilter, {nullable:true})
    _max?: NestedEnumFundContributionStatusFilter;
}
