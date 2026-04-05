import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundFlow } from './fund-flow.enum';
import { NestedEnumFundFlowFilter } from './nested-enum-fund-flow-filter.input';

@InputType()
export class EnumFundFlowFilter {

    @Field(() => FundFlow, {nullable:true})
    equals?: `${FundFlow}`;

    @Field(() => [FundFlow], {nullable:true})
    in?: Array<`${FundFlow}`>;

    @Field(() => [FundFlow], {nullable:true})
    notIn?: Array<`${FundFlow}`>;

    @Field(() => NestedEnumFundFlowFilter, {nullable:true})
    not?: NestedEnumFundFlowFilter;
}
