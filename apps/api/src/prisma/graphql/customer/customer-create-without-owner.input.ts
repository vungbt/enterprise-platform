import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from '../prisma/customer-status.enum';
import { InvoiceCreateNestedManyWithoutCustomerInput } from '../invoice/invoice-create-nested-many-without-customer.input';

@InputType()
export class CustomerCreateWithoutOwnerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => CustomerStatus, {nullable:true})
    status?: `${CustomerStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => InvoiceCreateNestedManyWithoutCustomerInput, {nullable:true})
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput;
}
