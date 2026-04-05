import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from './customer-status.enum';

@InputType()
export class NestedEnumCustomerStatusFilter {

    @Field(() => CustomerStatus, {nullable:true})
    equals?: `${CustomerStatus}`;

    @Field(() => [CustomerStatus], {nullable:true})
    in?: Array<`${CustomerStatus}`>;

    @Field(() => [CustomerStatus], {nullable:true})
    notIn?: Array<`${CustomerStatus}`>;

    @Field(() => NestedEnumCustomerStatusFilter, {nullable:true})
    not?: NestedEnumCustomerStatusFilter;
}
