import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceStatus } from './invoice-status.enum';
import { NestedEnumInvoiceStatusWithAggregatesFilter } from './nested-enum-invoice-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumInvoiceStatusFilter } from './nested-enum-invoice-status-filter.input';

@InputType()
export class EnumInvoiceStatusWithAggregatesFilter {

    @Field(() => InvoiceStatus, {nullable:true})
    equals?: `${InvoiceStatus}`;

    @Field(() => [InvoiceStatus], {nullable:true})
    in?: Array<`${InvoiceStatus}`>;

    @Field(() => [InvoiceStatus], {nullable:true})
    notIn?: Array<`${InvoiceStatus}`>;

    @Field(() => NestedEnumInvoiceStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumInvoiceStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumInvoiceStatusFilter, {nullable:true})
    _min?: NestedEnumInvoiceStatusFilter;

    @Field(() => NestedEnumInvoiceStatusFilter, {nullable:true})
    _max?: NestedEnumInvoiceStatusFilter;
}
