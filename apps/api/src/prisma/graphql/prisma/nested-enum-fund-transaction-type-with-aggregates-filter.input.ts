import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from './fund-transaction-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFundTransactionTypeFilter } from './nested-enum-fund-transaction-type-filter.input';

@InputType()
export class NestedEnumFundTransactionTypeWithAggregatesFilter {

    @Field(() => FundTransactionType, {nullable:true})
    equals?: `${FundTransactionType}`;

    @Field(() => [FundTransactionType], {nullable:true})
    in?: Array<`${FundTransactionType}`>;

    @Field(() => [FundTransactionType], {nullable:true})
    notIn?: Array<`${FundTransactionType}`>;

    @Field(() => NestedEnumFundTransactionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFundTransactionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFundTransactionTypeFilter, {nullable:true})
    _min?: NestedEnumFundTransactionTypeFilter;

    @Field(() => NestedEnumFundTransactionTypeFilter, {nullable:true})
    _max?: NestedEnumFundTransactionTypeFilter;
}
