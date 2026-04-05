import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InvoiceStatus } from '../prisma/invoice-status.enum';
import { CustomerUpdateOneWithoutInvoicesNestedInput } from '../customer/customer-update-one-without-invoices-nested.input';

@InputType()
export class InvoiceUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    tax?: number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => InvoiceStatus, {nullable:true})
    status?: `${InvoiceStatus}`;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    issuedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CustomerUpdateOneWithoutInvoicesNestedInput, {nullable:true})
    customer?: CustomerUpdateOneWithoutInvoicesNestedInput;
}
