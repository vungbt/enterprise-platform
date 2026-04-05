import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceStatus } from './invoice-status.enum';

@InputType()
export class NestedEnumInvoiceStatusFilter {

    @Field(() => InvoiceStatus, {nullable:true})
    equals?: `${InvoiceStatus}`;

    @Field(() => [InvoiceStatus], {nullable:true})
    in?: Array<`${InvoiceStatus}`>;

    @Field(() => [InvoiceStatus], {nullable:true})
    notIn?: Array<`${InvoiceStatus}`>;

    @Field(() => NestedEnumInvoiceStatusFilter, {nullable:true})
    not?: NestedEnumInvoiceStatusFilter;
}
