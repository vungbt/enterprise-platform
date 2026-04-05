import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundFlow } from './fund-flow.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFundFlowFilter } from './nested-enum-fund-flow-filter.input';

@InputType()
export class NestedEnumFundFlowWithAggregatesFilter {

    @Field(() => FundFlow, {nullable:true})
    equals?: `${FundFlow}`;

    @Field(() => [FundFlow], {nullable:true})
    in?: Array<`${FundFlow}`>;

    @Field(() => [FundFlow], {nullable:true})
    notIn?: Array<`${FundFlow}`>;

    @Field(() => NestedEnumFundFlowWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFundFlowWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFundFlowFilter, {nullable:true})
    _min?: NestedEnumFundFlowFilter;

    @Field(() => NestedEnumFundFlowFilter, {nullable:true})
    _max?: NestedEnumFundFlowFilter;
}
