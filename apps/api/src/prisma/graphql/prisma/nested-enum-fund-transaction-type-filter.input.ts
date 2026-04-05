import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundTransactionType } from './fund-transaction-type.enum';

@InputType()
export class NestedEnumFundTransactionTypeFilter {

    @Field(() => FundTransactionType, {nullable:true})
    equals?: `${FundTransactionType}`;

    @Field(() => [FundTransactionType], {nullable:true})
    in?: Array<`${FundTransactionType}`>;

    @Field(() => [FundTransactionType], {nullable:true})
    notIn?: Array<`${FundTransactionType}`>;

    @Field(() => NestedEnumFundTransactionTypeFilter, {nullable:true})
    not?: NestedEnumFundTransactionTypeFilter;
}
