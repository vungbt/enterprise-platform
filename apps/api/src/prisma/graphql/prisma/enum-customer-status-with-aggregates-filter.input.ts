import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from './customer-status.enum';
import { NestedEnumCustomerStatusWithAggregatesFilter } from './nested-enum-customer-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCustomerStatusFilter } from './nested-enum-customer-status-filter.input';

@InputType()
export class EnumCustomerStatusWithAggregatesFilter {

    @Field(() => CustomerStatus, {nullable:true})
    equals?: `${CustomerStatus}`;

    @Field(() => [CustomerStatus], {nullable:true})
    in?: Array<`${CustomerStatus}`>;

    @Field(() => [CustomerStatus], {nullable:true})
    notIn?: Array<`${CustomerStatus}`>;

    @Field(() => NestedEnumCustomerStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCustomerStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCustomerStatusFilter, {nullable:true})
    _min?: NestedEnumCustomerStatusFilter;

    @Field(() => NestedEnumCustomerStatusFilter, {nullable:true})
    _max?: NestedEnumCustomerStatusFilter;
}
