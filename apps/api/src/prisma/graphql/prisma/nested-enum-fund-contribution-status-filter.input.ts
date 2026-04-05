import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundContributionStatus } from './fund-contribution-status.enum';

@InputType()
export class NestedEnumFundContributionStatusFilter {

    @Field(() => FundContributionStatus, {nullable:true})
    equals?: `${FundContributionStatus}`;

    @Field(() => [FundContributionStatus], {nullable:true})
    in?: Array<`${FundContributionStatus}`>;

    @Field(() => [FundContributionStatus], {nullable:true})
    notIn?: Array<`${FundContributionStatus}`>;

    @Field(() => NestedEnumFundContributionStatusFilter, {nullable:true})
    not?: NestedEnumFundContributionStatusFilter;
}
