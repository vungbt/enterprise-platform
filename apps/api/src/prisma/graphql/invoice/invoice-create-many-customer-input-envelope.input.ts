import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateManyCustomerInput } from './invoice-create-many-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceCreateManyCustomerInputEnvelope {

    @Field(() => [InvoiceCreateManyCustomerInput], {nullable:false})
    @Type(() => InvoiceCreateManyCustomerInput)
    data!: Array<InvoiceCreateManyCustomerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
