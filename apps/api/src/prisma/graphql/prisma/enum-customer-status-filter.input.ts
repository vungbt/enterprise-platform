import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from './customer-status.enum';
import { NestedEnumCustomerStatusFilter } from './nested-enum-customer-status-filter.input';

@InputType()
export class EnumCustomerStatusFilter {

    @Field(() => CustomerStatus, {nullable:true})
    equals?: `${CustomerStatus}`;

    @Field(() => [CustomerStatus], {nullable:true})
    in?: Array<`${CustomerStatus}`>;

    @Field(() => [CustomerStatus], {nullable:true})
    notIn?: Array<`${CustomerStatus}`>;

    @Field(() => NestedEnumCustomerStatusFilter, {nullable:true})
    not?: NestedEnumCustomerStatusFilter;
}
