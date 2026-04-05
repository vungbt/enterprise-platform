import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerStatus } from '../prisma/customer-status.enum';
import { InvoiceUncheckedUpdateManyWithoutCustomerNestedInput } from '../invoice/invoice-unchecked-update-many-without-customer-nested.input';

@InputType()
export class CustomerUncheckedUpdateWithoutOwnerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

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

    @Field(() => InvoiceUncheckedUpdateManyWithoutCustomerNestedInput, {nullable:true})
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput;
}
