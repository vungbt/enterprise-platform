import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from './fund-transaction-type.enum';
import { NestedEnumFundTransactionTypeFilter } from './nested-enum-fund-transaction-type-filter.input';

@InputType()
export class EnumFundTransactionTypeFilter {

    @Field(() => FundTransactionType, {nullable:true})
    equals?: `${FundTransactionType}`;

    @Field(() => [FundTransactionType], {nullable:true})
    in?: Array<`${FundTransactionType}`>;

    @Field(() => [FundTransactionType], {nullable:true})
    notIn?: Array<`${FundTransactionType}`>;

    @Field(() => NestedEnumFundTransactionTypeFilter, {nullable:true})
    not?: NestedEnumFundTransactionTypeFilter;
}
