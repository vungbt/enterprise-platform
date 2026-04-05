import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { InvoiceStatus } from '../prisma/invoice-status.enum';
import { CustomerCreateNestedOneWithoutInvoicesInput } from '../customer/customer-create-nested-one-without-invoices.input';

@InputType()
export class InvoiceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:true})
    tax?: number;

    @Field(() => Float, {nullable:false})
    total!: number;

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

    @Field(() => CustomerCreateNestedOneWithoutInvoicesInput, {nullable:true})
    customer?: CustomerCreateNestedOneWithoutInvoicesInput;
}
